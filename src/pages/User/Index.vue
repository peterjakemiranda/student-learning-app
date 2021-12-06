<template>
  <div class="q-pa-md q-gutter-md">
    <q-page-sticky
      expand
      position="top-left"
      class="full-width"
      style="z-index: 1"
    >
      <q-breadcrumbs
        class="text-grey bg-white full-width q-px-lg q-py-sm text-body1"
      >
        <q-breadcrumbs-el
          to="/users"
          icon="keyboard_arrow_left"
          label="All Users"
        />
      </q-breadcrumbs>
    </q-page-sticky>
    <div
      class="text-h5 q-mb-md"
      style="padding-top: 48px"
    >
      Users
    </div>
    <q-btn
      :to="`/users/create`"
      color="primary"
      icon="add"
      label="Create User"
    />
    <div class="q-pt-sm">
      <q-input
        bottom-slots
        filled
        debounce="800"
        v-model="searchText"
        ref="searchInput"
        dense
      >
        <template v-slot:append>
          <q-icon
            v-if="searchText !== ''"
            name="close"
            @click="clearSearch"
            class="cursor-pointer"
          />
          <q-icon name="search" />
        </template>

      </q-input>
      <div class="text-center" v-if="loading">
        <q-spinner-hourglass
          color="primary"
          size="2em"
        />
      </div>
    </div>
    <q-list class="q-pa-none">
      <q-item v-ripple v-for="user in users.data" :key="user.id">
        <q-item-section>
          <q-item-label>{{ user.fullname }}</q-item-label>
          <q-item-label caption>{{ user.email }}</q-item-label>
          <q-item-label caption>Role: {{ user.role }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="q-gutter-xs">
            <q-btn
              flat
              round
              size="12px"
              icon="edit"
              :to="`/users/${user.id}/edit`"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Edit
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              size="12px"
              icon="delete"
              @click.prevent="remove(user)"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Delete
              </q-tooltip>
            </q-btn>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="q-pt-none q-pa-lg flex flex-center">
      <q-pagination
            v-model="page"
            :max="lastpage"
            input
            @input="fetchUsers"
      >
      </q-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import userService from "../../services/user";
import store from "../../store";

export default defineComponent({
  name: "UserIndex",
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
      users: "users",
      searchQuery: "userQuery",
    }),
  },
  mounted() {
    const query = {
      page: this.page,
      limit: this.limit,
      search: this.searchQuery.search,
    };
    store.dispatch("setUserQuery", query);
    this.fetchUsers();
    if (this.searchQuery.search) {
      this.searchText = this.searchQuery.search;
    }
  },
  methods: {
    fetchUsers() {
      userService
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
    remove(user) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to delete this user?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          userService
            .destroy(user.id)
            .then((data) => {
              this.loading = false;
            })
            .catch((errors) => {
              this.loading = false;
            });
        });
    },
    clearSearch() {
      this.searchText = "";
      this.$refs.searchInput.focus();
    },
  },
  watch: {
    page(page) {
      const query = {
        page: page,
        limit: this.limit,
        search: this.searchQuery.search,
      };
      store.dispatch("setUserQuery", query);
      this.fetchUsers();
    },
    users(users) {
      if (!users.pagination) return;
      this.lastpage = users.pagination.last_page;
    },
    searchText(searchText) {
      const query = {
        page: this.page,
        limit: this.limit,
        search: searchText,
      };
      store.dispatch("setUserQuery", query);
      this.fetchUsers()
    },
  },
});
</script>