<template>
  <div class="q-pa-sm">
    <q-page-sticky
      expand
      position="top-left"
      class="full-width"
      style="z-index: 1"
    >
      <q-breadcrumbs
        class="text-grey bg-white full-width q-px-lg q-py-sm text-body1"
      >
        <q-breadcrumbs-el v-if="course" :to="`/courses/${course.id}/students`" :label="course?.title || 'Course'"/>
        <q-breadcrumbs-el icon="description" label="Add Students"/>
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="text-h5 q-mb-lg q-pt-xl q-pb-xs">Add New Student</div>
    <div class="text-center" v-if="loading">
      <q-spinner-hourglass
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        style="max-width: 800px"
      >
        <q-input filled v-model="first_name" label="First name" />
        <q-input filled v-model="last_name" label="Last name" />
        <q-input filled v-model="email" label="Email" />

        <div class="q-gutter-lg q-pa-lg">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Back"
            type="submit"
            v-if="course"
            :to="`/courses/${course.id}/students/add`"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../../../services/course";
import studentService from "../../../services/student";
import store from "../../../store";

export default defineComponent({
  name: "InviteStudent",
  data() {
    return {
      loading: false,
      id: "",
      first_name: "",
      last_name: "",
      email: "",
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
    onSubmit() {
      studentService.invite({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        course_id: this.course.id,
      })
      .then((data) => {
        store.dispatch("setCurrentCourse", data);
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
      });
    },
    
  },
});
</script>
