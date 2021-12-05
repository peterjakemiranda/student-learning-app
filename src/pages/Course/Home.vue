<template>
  <div class="q-pa-sm">
    <header-menu/>
    <div class="text-center" v-if="loading">
      <q-spinner-bars
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs">Math 2</div>
            <div class="text-h7 q-mt-xs q-mb-xs">Course Code: MATH2</div>
            <div class="text-h7 q-mt-xs q-mb-xs">Google hangout link: https://google.com</div>
            <div class="text-caption text-grey">
              Geometry
            </div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat>
            7:30AM - 9:00AM TTH
          </q-btn>
        </q-card-actions>

        <q-separator />

        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">Activities Due:</div>
          <div class="text-h7 q-mt-sm q-mb-xs">Activity 1</div>
          <div class="text-h7 q-mt-sm q-mb-xs">Activity 2</div>
        </q-card-section>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">Active Quizzes</div>
          <div class="text-h7 q-mt-sm q-mb-xs">Quiz 1</div>
          <div class="text-h7 q-mt-sm q-mb-xs">Quiz 2</div>
        </q-card-section>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">Latest Announcements</div>
          <div class="text-h7 q-mt-sm q-mb-xs">Announcement 1: this is a test annoucement</div>
          <div class="text-h7 q-mt-sm q-mb-xs">Announcement 2: this is a test annoucement</div>
        </q-card-section>

        <q-separator />
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../../services/course";
import HeaderMenu from "./HeaderMenu.vue"
import store from "../../store";

export default defineComponent({
  name: "ViewCourse",
  components: {
    HeaderMenu
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      course: "currentCourse",
    }),
  },
  mounted() {
    if (!this.course) {
      this.loading = true;
      courseService
        .show(this.$route.params.id)
        .then((data) => {
          store.dispatch("setCurrentCourse", data);
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    }
  },
  methods: {
    
  },
});
</script>
