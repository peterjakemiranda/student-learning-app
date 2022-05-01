<template>
  <div id="notification-logs"></div>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from "vuex";
import accountService from "./services/account";

export default defineComponent({
  name: 'App',
  created () {
    if (this.isAuthenticated) {
      this.storePushNotificationToken();
    }
    this.checkInitialPushPayload();
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
    }),
  },
  methods: {
    storeToken(token) {
      accountService.storeToken({ token })
          .then((data) => {})
          .catch((errors) => {
            console.log(errors)
          });
    },

    async storePushNotificationToken() {
      try {
        const fcmToken = await FCM.getToken();
        this.storeToken(fcmToken);

        FCM.onTokenRefresh((fcmToken) => {
          this.storeToken(fcmToken);
        });
      } catch (e) {
        console.log(e);
      }
    },

    async checkInitialPushPayload() {
      try {
        FCM.onNotification((payload) => {
          console.log('notification is received',payload);
          // this.goToPage(payload);
          alert('notif');
        });
        const payload = await FCM.getInitialPushPayload();
        if(payload) {
          this.goToPage(payload);
        }
      } catch (e) {
        console.log(e);
      }
    },
    
    goToPage(payload) {
      switch (payload.type) {
        case 'quiz':
          this.$router.push(`/courses/${payload.course_id}/quizzes/${payload.quiz_id}`);
          break;
        case 'activity':
          this.$router.push(`/courses/${payload.course_id}/activities/${payload.activity_id}`);
          break;
        case 'announcement':
          this.$router.push(`/courses/${payload.course_id}/announcements/${payload.announcement_id}`);
          break;
      }
    }
  },
})
</script>
