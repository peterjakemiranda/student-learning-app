<template>
  <div class="q-pa-none">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Grading</q-toolbar-title>
    </q-toolbar>
    <div class="text-subtitle1 q-pa-sm">Points: {{activity?.points}}</div>
    <q-list bordered>
      <q-item class="q-my-xs">
        <q-item-section>
          <q-item-label>Student</q-item-label>
        </q-item-section>
        <q-item-section side top>
          Score
        </q-item-section>
      </q-item>
      <q-item v-for="student in students" :key="student.id" class="q-my-sm" clickable v-ripple @click="gradeActivity(student)">
        <q-item-section>
          <q-item-label>{{ student.fullname }}</q-item-label>
          <q-item-label caption lines="1">{{ student.email }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <span v-if="student?.answers && student?.answers[0]?.score">{{ student.answers[0].score }}</span>
          <span v-else-if="student?.answers && student?.answers.length">Ungraded</span>
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
        <div class="text-subtitle">Activity: <b>{{ activity?.title }}</b></div>
        <div class="text-subtitle">Student: <b>{{ student?.fullname }}</b></div>
        <div class="text-subtitle">Points: <b>{{activity?.points}}</b></div>
      </q-card-section>

      <q-card-section class="q-pt-md">
        <q-img
        v-if="isImage(answerFilePath)"
        :src="answerFilePath"
        spinner-color="red"
        style="height: 470px;"
        :fit="'contain'"
      />
        <PdfViewer v-show="answerFilePath && !isImage(answerFilePath)" :src="answerFilePath" :id="`grading-${student?.id}`"/>
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
import activityService from "../../../services/activity";
import PdfViewer from "../../../components/PDFViewer";

export default defineComponent({
  name: "Grading",
  components: {
    PdfViewer
  },
  data() {
    return {
      dialog: false,
      loading: false,
      student: null,
      score: null,
    };
  },
  props: {
    activity: {
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
    answerFilePath() {
      return this.student.answers[0]['file'];
    }
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    gradeActivity(student) {
      this.student = student;
      if (!student?.answers.length) {
        this.$q
        .dialog({
          message: "This student hasn't submitted an answer yet!",
        })
        return;
      }
      if (this.student?.answers.length) {
        this.score = this.student?.answers[0].score;
      }
      this.dialog = true;
    },
    onSubmitScore() {
      this.loading = true;
      activityService.submitScore(this.activity?.id, this.student.answers[0].id, {score: this.score})
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
        activity_id: this.activity?.id
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
