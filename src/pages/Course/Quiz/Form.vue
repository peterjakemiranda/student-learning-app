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
        <q-breadcrumbs-el v-if="course" :to="`/courses/${course.id}/quizzes`" :label="course?.title || 'Course'"/>
        <q-breadcrumbs-el icon="description" label="Create Quiz"/>
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="text-h5 q-mb-lg q-pt-xl q-pb-xs">{{ id ? "Update" : "Create" }} Quiz</div>
    <div class="text-center" v-if="loading">
      <q-spinner-bars
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
        <div class="q-gutter-md q-ml-none" style="max-width: 400px">
          <q-input filled v-model="title" label="Title"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Please input title']"/>
          <q-input filled v-model="points" label="Points"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Please input score']"/>
        </div>
        <div class="q-pa-sm q-pt-xs">
          <span class="label q-pt-md q-pb-sm">Instructions:</span>
          <q-editor
            v-model="body"
            filled
            label="Body *"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Content is required']"
          />
        </div>
        <div class="q-gutter-lg q-pa-lg">
          <q-btn label="Save" type="submit" color="primary" />
          <q-btn
            label="Back"
            type="submit"
            v-if="course"
            :to="`/courses/${course.id}/quizzes`"
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
import quizService from "../../../services/quiz";
import store from "../../../store";

export default defineComponent({
  name: "ViewQuiz",
  data() {
    return {
      loading: false,
      id: "",
      title: "",
      points: "",
      body: "",
      file: null,
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
    
    onSubmit() {
      const formData = new FormData()
      formData.append('title', this.title);
      formData.append('points', this.points);
      formData.append('body', this.body);
      formData.append('course_id', this.course.id);

      const resource = this.id ? quizService.update(this.id, formData) : quizService.store(formData);
      Promise.all([resource])
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/courses/${this.course.id}/quizzes`
          );
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
  },
});
</script>
