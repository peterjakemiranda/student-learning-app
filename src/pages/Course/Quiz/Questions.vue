<template>
  <div class="q-pa-none">
      <q-btn
        v-if="quiz && isTeacher"
        color="primary"
        icon="add"
        label="Add Question"
        class="q-mb-md"
        @click="addQuestion"
      />
    <q-list bordered>
      <q-item class="q-ma-none q-py-none">
        <q-item-section>
          <q-item-label>Question</q-item-label>
        </q-item-section>
        <q-item-section side>
        </q-item-section>
      </q-item>
      <q-item v-for="question in questions" :key="question.id" class="q-my-sm">
        <q-item-section>
          <q-item-label class="ellipsis-2-lines">{{ question.question }}</q-item-label>
          <q-item-label caption lines="1">{{ question.type_name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row q-gutter-sm">
            <q-btn v-ripple size="12px" dense round icon="edit" clickable @click="editQuestion(question)"/>
            <q-btn v-ripple size="12px" dense round icon="delete" clickable @click="deleteQuestion(question)"/>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <q-dialog
    v-model="dialog"
    persistent
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-white text-dark">
      <q-bar class="bg-primary">
        <q-space />
        <q-btn class="text-white" dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-white">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section class="q-pt-md">
        <q-form
          @submit="onSubmitQuestion"
          class="q-gutter-md q-pt-md"
        >
          <q-input
            filled
            type="textarea"
            v-model="form.question"
            label="Question"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please enter question',
            ]"
          />
          <div class="q-gutter-xs">
            <q-radio v-model="form.type" val="text" label="Text Input" />
            <q-radio v-model="form.type" val="multiple_choice" label="Multiple Choice" />
            <q-radio v-model="form.type" val="multiple_answers" label="Multiple Answers" />
            <q-radio v-model="form.type" val="file_upload" label="File Upload" />
          </div>
          <q-input
            v-if="['multiple_choice', 'multiple_answers'].includes(form.type)"
            filled
            type="textarea"
            v-model="form.options"
            label="Choices"
            hint="Enter each choices per line"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please enter Options',
            ]"
          />
          <q-input
            filled
            type="text"
            v-model="form.correct_answer"
            label="Correct Answer"
          />
          <div class="row items-center justify-center q-gutter-md">
            <q-btn label="Cancel" type="button" color="purple" @click="dialog = false"/>
            <q-btn label="Submit" type="submit" color="secondary"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import quizQuestionService from "../../../services/quizQuestion";

export default defineComponent({
  name: "Questions",
  data() {
    return {
      dialog: false,
      loading: false,
      student: null,
      form: {
        id: null,
        question: '',
        type: 'text',
        options: null,
        correct_answer: '',
      },
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
    addQuestion() {
      this.dialog = true;
    },
    onSubmitQuestion() {
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
    editQuestion(question) {
        this.form = Object.assign({}, question);
        this.dialog = true;
    },
    deleteQuestion(question) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure to delete this question?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.loading = true;
        quizQuestionService.destroy(question.id)
        .then((data) => {
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
      })
    },
  },
});
</script>
