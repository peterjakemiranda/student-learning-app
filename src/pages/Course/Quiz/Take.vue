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
        <q-breadcrumbs-el :to="`/courses/${course?.id}/quizzes`" :label="course?.title || 'Course'"/>
        <q-breadcrumbs-el icon="description" label="View Quiz"/>
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="text-h5 q-mb-sm q-pt-xl q-pb-xs">{{quiz?.title}}</div>
    <div class="text-center" v-if="loading">
      <q-spinner-hourglass
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
      <div class="q-pa-sm">
        <quiz-viewer :quiz="quiz" :course="course"/>
      </div>
      <div class="row justify-center">
        <span class="label q-pa-lg q-text-left">Answer Submitted At: {{ formatDate(quiz?.updated_at)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import store from "../../../store";
import courseService from "../../../services/course";
import quizService from "../../../services/quiz";
import { date } from 'quasar'
import QuizViewer from './QuizViewer.vue';

export default defineComponent({
  name: "QuizView",
  data() {
    return {
      loading: false,
      quiz: null,
      file: null,
      content: null,
      resubmit: 0,
      tab: 'view',
    };
  },
  components: {
    QuizViewer,
  },
  computed: {
    ...mapGetters({
      quizzes: "allQuizzes",
      course: "currentCourse",
      isStudent: "isStudent",
      isTeacher: "isTeacher",
    }),
    allowSubmission() {
      return !this.quiz?.answers.length || this.resubmit === 1;
    }
  },
  mounted() {
    const resources = [quizService.show(this.$route.params.quiz_id)];
    if (!this.course) {
      resources.push(courseService.show(this.$route.params.id));
    }
    this.loading = true;
    Promise.all(resources)
        .then((data) => {
          this.quiz = data[0] || null;
          if (!this.course) {
            store.dispatch("setCurrentCourse", data[1]);
          }
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
  },
  methods: {
    onSubmit() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('content', this.content);
      formData.append('submission_type', this.quiz.submission_type);
      quizService.submitAnswer(this.$route.params.quiz_id, formData)
      .then((data) => {
        this.quiz.answers = data.answers || null;
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
      });
    },
    formatDate(timestamp) {
      return date.formatDate(timestamp, 'YYYY-MM-DD HH:mm:ss');
    }
  },
});
</script>
