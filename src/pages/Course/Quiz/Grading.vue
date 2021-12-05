<template>
  <div class="q-pa-none">
    <q-list bordered>
      <q-item class="q-ma-none q-py-none">
        <q-item-section>
          <q-item-label>Student</q-item-label>
        </q-item-section>
        <q-item-section side>
          Score
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item v-for="student in students" :key="student.id" class="q-my-sm" clickable v-ripple @click="gradeQuiz(student)">
        <q-item-section>
          <q-item-label>{{ student.fullname }}</q-item-label>
          <q-item-label caption lines="1">{{ student.email }}</q-item-label>
        </q-item-section>
    
        <q-item-section side top>
          <span v-if="student?.quiz_answers && student?.quiz_answers[0]?.score">{{ student.quiz_answers[0].score }}</span>
          <span v-else-if="student?.quiz_answers && student?.quiz_answers.length">Ungraded</span>
          <span v-else>No Answer</span>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <q-dialog
    v-model="dialog"
    persistent
    :maximized="true"
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

      <q-card-section>
        <div class="text-subtitle">Quiz: <b>{{ quiz?.title }}</b></div>
        <div class="text-subtitle">Student: <b>{{ student?.fullname }}</b></div>
      </q-card-section>

      <q-card-section class="q-pt-md">
        <quiz-viewer :quiz="quiz"/>
        <q-form
          @submit="onSubmitScore"
          class="q-gutter-md q-pt-md"
        >
          <q-input
            filled
            type="number"
            v-model="score"
            label="Score *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please enter score',
            ]"
          />

          <div class="row items-center justify-center q-gutter-md">
            <q-btn label="Cancel" type="button" color="purple" @click="dialog = false"/>
            <q-btn label="Submit Score" type="submit" color="secondary"/>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import studentService from "../../../services/student";
import quizService from "../../../services/quiz";

export default defineComponent({
  name: "Grading",
  data() {
    return {
      dialog: false,
      loading: false,
      student: null,
      score: null,
    };
  },
  props: {
    quiz: {
      type: Object,
      default: () => {}
    },
    course: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    ...mapGetters({
      students: "allStudents",
      isTeacher: "isTeacher",
    }),
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    gradeQuiz(student) {
      this.student = student;
      if (!student?.quiz_answers.length) {
        this.$q
        .dialog({
          message: "This student hasn't submitted an answer yet!",
        })
        return;
      }
      if (this.student?.quiz_answers.length) {
        this.score = this.student?.quiz_answers[0].score;
      }
      this.dialog = true;
    },
    onSubmitScore() {
      this.loading = true;
      quizService.submitScore(this.quiz?.id, this.student.quiz_answers[0].id, {score: this.score})
        .then((data) => {
          this.dialog = false;
          this.student = null;
          this.score = null;
          this.loading = false;
          this.fetchStudents();
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    fetchStudents()
    {
      this.loading = true;
      studentService.all({
        by_course: 1,
        course_id: this.$route.params.id,
        quiz_id: this.quiz?.id
      })
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
    },
    isImage(url) {
      return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
    
  },
});
</script>
