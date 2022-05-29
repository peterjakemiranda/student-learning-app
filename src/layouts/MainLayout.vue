<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="q-pb-sm">
      <!-- <q-img class="absolute-top" :src="bgImage" style="height: 108px" /> -->
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm"
          @click="toggleLeftDrawer"
        />
        <q-space></q-space>
        <q-btn dense round flat icon="notifications" to="/notifications">
          <q-badge color="red" floating transparent v-if="notificationCount">
            {{notificationCount}}
          </q-badge>
        </q-btn>
      </q-toolbar>
      <q-toolbar inset @click="goHome">
        <q-avatar>
          <q-img :src="logoImage" />
        </q-avatar>
        <q-toolbar-title>Lantaw</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="
          height: calc(100% - 98px);
          margin-top: 110px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="/" v-ripple exact>
            <q-item-section avatar>
              <q-icon name="menu_book" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>
          <q-item to="/courses" v-ripple exact v-if="isTeacher">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section> Courses </q-item-section>
          </q-item>
          <q-item to="/users" v-ripple exact v-if="isTeacher">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Users </q-item-section>
          </q-item>
          <q-item to="/account" v-ripple exact>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> My Account </q-item-section>
          </q-item>

          <q-item clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section @click="logout"> Logout </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" :src="bgImage" style="height: 108px">
        <div
          class="
            absolute-bottom
            bg-transparent
            flex
            justify-start
            items-top
            q-gutter-sm
          "
        >
          <q-avatar size="32px" class="q-mb-sm">
            <img :src="studentImage" style="width: 32px" />
          </q-avatar>
          <div class="text-weight-bold" v-if="account">
            <span>{{ account.first_name }} {{ account.last_name }}</span>
            <span class="block text-weight-normal" style="font-size: 9px">{{
              account.email
            }}</span>
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters, mapMutations } from "vuex";
import bgImage from "../assets/5559852.jpg";
import logoImage from "../assets/lantaw-logo-white.png";
import studentImage from "../assets/student.png";
import authService from "./../services/auth";
import accountService from "./../services/account";
import notificationService from "./../services/notification";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      bgImage,
      logoImage,
      studentImage,
      searchText: "",
      search: false,
    };
  },

  components: {},
  mounted() {
    accountService.find().then(() => {});
    notificationService.count().then(() => {});
  },
  computed: {
    ...mapGetters({
      account: "account",
      notificationCount: "notificationCount",
    }),
    isTeacher() {
      return ["admin","teacher"].includes(window.localStorage.getItem("role"));
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    logout() {
      authService.logout();
    },
    goHome() {
      this.$router.push("/");
    },
  },
});
</script>
