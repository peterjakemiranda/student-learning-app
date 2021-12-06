<template>
  <div class="q-pa-md q-gutter-md">
    <div
      class="text-h5 q-mb-md"
    >
      Notifications
    </div>
    <q-list class="q-pa-none full-height" v-if="notifications?.length">
      <q-item v-ripple clickable v-for="notification in notifications" :key="notification.id" @click="goToPage(notification)">
        <q-item-section>
          <q-item-label>{{ notification.title }}</q-item-label>
          <q-item-label caption>{{ notification.body }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="!notification.read" side>
          <q-badge color="red" rounded class="q-mr-sm" />
        </q-item-section>
      </q-item>
    </q-list>
    <div caption v-else>You have no notification.</div>
    <div class="q-pt-none q-pa-lg flex flex-center">
      <q-pagination
            v-model="page"
            :max="lastpage"
            input
            @input="fetchNotifications"
      >
      </q-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import notificationService from "../../services/notification";
import store from "../../store";

export default defineComponent({
  name: "NotificationIndex",
  data() {
    return {
      loading: false,
      title: "",
      page: 1,
      limit: 10,
      lastpage: 1,
      searchText: "",
    };
  },
  computed: {
    ...mapGetters({
      notifications: "notifications",
      pagination: "notificationPagination",
      searchQuery: "notificationQuery",
    }),
  },
  mounted() {
    const query = {
      page: this.page,
      limit: this.limit,
      search: this.searchQuery.search,
    };
    store.dispatch("setNotificationQuery", query);
    this.fetchNotifications();
  },
  methods: {
    fetchNotifications() {
      notificationService
        .items({
            page: this.searchQuery.page,
            limit: this.searchQuery.limit,
            search: this.searchQuery.search,
          })
        .then((data) => {
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    clearSearch() {
      this.searchText = "";
      this.$refs.searchInput.focus();
    },
    goToPage(notification) {
      notificationService.read(notification.id);
      switch (notification.type) {
        case 'quiz':
          this.$router.push(`/courses/${notification.data.course_id}/quizzes/${notification.data.quiz_id}`);
          break;
        case 'activity':
          this.$router.push(`/courses/${notification.data.course_id}/activities/${notification.data.activity_id}`);
          break;
        case 'announcement':
          this.$router.push(`/courses/${notification.data.course_id}/announcements/${notification.data.announcement_id}`);
          break;
      }
    }
  },
  watch: {
    page(page) {
      const query = {
        page: page,
        limit: this.limit,
        search: this.searchQuery.search,
      };
      store.dispatch("setNotificationQuery", query);
      this.fetchNotifications();
    },
    pagination(pagination) {
      if (!pagination) return;
      this.lastpage = pagination.lastPage;
    },
  },
});
</script>