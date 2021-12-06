<template>
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
    async storePushNotificationToken() {
      try {
        const fcmToken = await FCM.getToken();
        accountService.storeToken({ token: fcmToken })
          .then((data) => {})
          .catch((errors) => {
            console.log(errors)
          });
      } catch (e) {
        console.log(e);
      }
    },

    async checkInitialPushPayload() {
      const pushPayload = await FCM.getInitialPushPayload();
      console.log(pushPayload);
    }
  },
})
</script>
