<template>
  <div class="q-pb-md">
    <q-page-sticky
      expand
      position="top-left"
      class="full-width"
      style="z-index: 1"
    >
      <q-breadcrumbs
        class="text-grey bg-white full-width q-px-lg q-py-sm text-body1"
      >
        <q-breadcrumbs-el to="/" icon="menu_book" label="My Courses" />
        <q-breadcrumbs-el icon="description" :label="course?.title || 'Course'"/>
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="text-h5 q-mb-xs q-pt-xl q-pb-xs">{{ course?.title || 'Course' }}</div>
    <q-tabs
      dense
      mobile-arrows
      v-if="course"
    >
      <q-route-tab :to="`/courses/${course.id}`" icon="home" label="Home" exact/>
      <q-route-tab :to="`/courses/${course.id}/activities`" icon="description" label="Activities" exact/>
      <q-route-tab v-if="isTeacher" :to="`/courses/${course.id}/students`" icon="people" label="Students" exact/>
      <q-route-tab :to="`/courses/${course.id}/quizzes`" icon="quiz" label="Quizzes" exact/>
      <q-route-tab :to="`/courses/${course.id}/announcements`" icon="campaign" label="Announcements" exact/>
    </q-tabs>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../../services/course";
import store from "../../store";

export default defineComponent({
  name: "Menu",
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      course: "currentCourse",
      isTeacher: "isTeacher",
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
