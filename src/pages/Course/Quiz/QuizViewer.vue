<template>
  <div class="q-pa-none">
  <q-form
    @submit="onSubmit"
    class="q-gutter-md"
    style="max-width: 800px"
    v-if="questions.length && answers.length"
      >
      <div v-for="(question, index) in questions" :key="question.id" class="q-pb-md">
        <q-item-label class="q-py-sm">{{ question.question }}</q-item-label>
        <template v-if="question.type === 'text'">
          <q-input :disabled="isTeacher" filled v-model="answers[index].answer" stack-label/>
        </template>
        <template v-if="question.type === 'multiple_choice'">
          <div class="q-gutter-sm">
            <q-radio :disabled="isTeacher" v-for="option in getOptions(question)" :key="option.id" v-model="answers[index].answer" :val="option" :label="option" />
          </div>
        </template>
        <template v-if="question.type === 'multiple_answers'">
          <div class="q-gutter-sm">
            <q-checkbox :disabled="isTeacher" v-for="option in getOptions(question)" :key="option.id" v-model="answers[index].answer" :val="option" :label="option" />
          </div>
        </template>
        <template v-if="question.type === 'file_upload'">
          <q-file
            :disabled="isTeacher"
            v-model="answers[index].answer"
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
          <div v-if="isTeacher && studentId && question.answer">
            <q-img
              v-if="isImage(answerFilePath(question.answer))"
              :src="answerFilePath(question.answer)"
              spinner-color="red"
              style="height: 470px;"
              :fit="'contain'"
            />
            <q-pdfviewer
              v-else
              style="height: 470px;"
              type="html5"
              :src="answerFilePath(question.answer)"
            />
          </div>
        </template>
        <div class="text-subtitle1 q-ma-sm q-pa-sm bg-blue-2 text-gray-500" v-if="isTeacher && studentId">Correct Answer: {{question.correct_answer}}</div>
        </div>
        <div class="q-gutter-lg q-pa-lg row justify-center">
          <q-btn v-if="!isTeacher" label="Submit Answer" type="submit" color="primary" />
        </div>
      </q-form>
      <div class="text-subtitle text-center" v-if="!questions.length">No questions added for this quiz.</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import quizQuestionService from "../../../services/quizQuestion";
import quizService from "../../../services/quiz";

export default defineComponent({
  name: "QuestionViewer",
  data() {
    return {
      loading: false,
      answers: []
    };
  },
  props: {
    course: {
      type: Object,
      default: () => {}
    },
    quiz: {
      type: Object,
      default: () => {}
    },
    studentId: {
      type: Number,
      default: null,
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
      const formData = new FormData();
      this.answers.forEach(a => {
        formData.append(`answers[${a.id}]`, a.answer);
      });
      this.loading = true;
      quizService.submitAnswer(this.quiz.id, formData)
        .then((data) => {
          this.loading = false;
          this.$q.dialog({
            title: "Success!",
            message: "Your answers has been successfully submitted.",
          }).onOk(() => {
            this.$router.push(`/courses/${this.course?.id}/quizzes`);
          });
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    fetchQuestions()
    {
      this.loading = true;
      const studentId = this.studentId || null;
      quizQuestionService.all(this.quiz?.id, studentId)
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
    },
    getOptions(question) {
      return question.options.split("\n");
    },
    getAnswer(questionId) {
      return this.answers.find(a => a.id == questionId)['answer'];
    },
    answerFilePath(answer) {
      return `${process.env.API}/${answer.file}`;
    },
    isImage(url) {
      return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
  },
  watch: {
    questions(questions) {
      this.answers = [];
      questions.forEach((q) => {
        if (q.type === 'multiple_answers') {
          this.answers.push({id: q.id, answer: q.answer ? q.answer.content.split(',') : []});
        } else if (q.type != 'file_upload') {
          this.answers.push({id: q.id, answer: q.answer ? q.answer.content : ''});
        } else {
          this.answers.push({id: q.id, answer: null});
        }
      });
    }
  },
});
</script>
