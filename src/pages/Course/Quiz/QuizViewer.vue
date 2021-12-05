<template>
  <div class="q-pa-none">
  <q-form
    @submit="onSubmit"
    class="q-gutter-md"
    style="max-width: 800px"
      >
      <div v-for="question in questions" :key="question.id" class="q-pb-md">
        <q-item-label class="q-py-sm">{{ question.question }}</q-item-label>
        <template v-if="question.type === 'text'">
          <q-input filled v-model="answers[question.id]" stack-label/>
        </template>
        <template v-if="question.type === 'multiple_choice'">
          <div class="q-gutter-sm">
            <q-radio v-for="option in getOptions(question)" :key="option.id" v-model="answers[question.id]" :val="option" :label="option" />
          </div>
        </template>
        <template v-if="question.type === 'multiple_answers'">
          <div class="q-gutter-sm">
            <q-checkbox v-for="option in getOptions(question)" :key="option.id" v-model="answers[question.id]" :val="option" :label="option" />
          </div>
        </template>
        <template v-if="question.type === 'file_upload'">
          <q-file
            v-model="answers[question.id]"
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
        </template>
        </div>
        <div class="q-gutter-lg q-pa-lg">
          <q-btn :disable="isTeacher" label="Submit Answer" type="submit" color="primary" />
        </div>
      </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import quizQuestionService from "../../../services/quizQuestion";

export default defineComponent({
  name: "QuestionViewer",
  data() {
    return {
      loading: false,
      answers: []
    };
  },
  props: {
    quiz: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    ...mapGetters({
      questions: "allQuizQuestions",
      isTeacher: "isTeacher",
    }),
  },
  mounted() {
    this.fetchQuestions();
  },
  methods: {
    onSubmit() {
      this.loading = true;
      const params = {
          quiz_id: this.quiz.id, 
          question: this.form.question, 
          type: this.form.type, 
          options: this.form.options,
          correct_answer: this.form.correct_answer,
        };
      const resource = this.form.id ? quizQuestionService.update(this.form.id, params) : quizQuestionService.store(params);
      Promise.all([resource])
        .then((data) => {
          this.loading = false;
          this.dialog = false;
          this.form = {
            id: null,
            question: '',
            type: 'text',
            options: null,
            correct_answer: '',
          };
          this.fetchQuestions();
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    fetchQuestions()
    {
      this.loading = true;
      quizQuestionService.all(this.quiz?.id)
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
    },
    getOptions(question) {
      return question.options.split("\n");
    }
  },
  watch: {
    questions(questions) {
      questions.forEach((q) => {
        if (q.type === 'multiple_answers') {
          this.answers[q.id] = [];
        } else {
          this.answers[q.id] = null;
        }
      });
    }
  },
});
</script>
