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
      <q-spinner-bars
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="view" label="View" />
          <q-tab name="questions" label="Questions" />
          <q-tab name="grading" label="Grading" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="view">
            <q-form
              v-if="isStudent && allowSubmission"
              @submit="onSubmit"
              class="q-gutter-md"
              style="max-width: 800px"
            >
              <div class="q-gutter-sm q-pt-lg" style="max-width: 400px" v-if="quiz?.submission_type === 'file_upload'">
                <q-file
                  v-model="file"
                  label="Upload your answer"
                  square
                  flat
                  outlined
                  use-chips
                  clearable
                  accept=".pdf,.jpg,.png,.gif"
                  max-files="1"
                  max-file-size="5120000"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
              </div>
              <div class="q-pa-sm q-pt-xs" v-else>
                <span class="label q-pt-md q-pb-sm">Write your Answer *</span>
                <q-editor
                  v-model="content"
                  filled
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Content is required']"
                />
              </div>
              <div class="q-gutter-lg q-pa-lg row justify-center">
                <q-btn label="Submit Answer" type="submit" color="primary" />
                <q-btn :to="`/courses/${course?.id}/quizzes`" label="Back" type="submit" color="secondary" />
              </div>
            </q-form>
            <div v-else>
              <quiz-viewer :quiz="quiz"/>
              <div class="row justify-center" v-if="isStudent">
                <span class="label q-pa-lg q-text-left">Answer Submitted At: {{ formatDate(quiz?.updated_at)}}</span>
              </div>
              <!-- <q-btn label="Update Answer" type="submit" color="primary" /> -->
            </div>
          </q-tab-panel>

          <q-tab-panel name="questions">
            <questions :quiz="quiz"/>
          </q-tab-panel>

          <q-tab-panel name="grading">
            <grading :course="course" :quiz="quiz"/>
          </q-tab-panel>
        </q-tab-panels>
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
import Grading from './Grading.vue';
import Questions from './Questions.vue';
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
    Grading,
    Questions,
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
