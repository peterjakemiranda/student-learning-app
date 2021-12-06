<template>
  <div class="q-pa-sm">
    <header-menu/>
    <div class="text-center" v-if="loading">
      <q-spinner-hourglass
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
      <q-btn
        v-if="course && isTeacher"
        :to="`/courses/${course.id}/quizzes/create`"
        color="primary"
        icon="add"
        label="Create Quiz"
        class="q-mb-md"
      />
      <template v-if="quizzes.length">
        <q-item  class="q-pa-sm"  v-for="quiz in quizzes" :key="quiz.id">
          <q-item-section avatar top>
            <q-avatar icon="assignment" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{quiz.title}}</q-item-label>
            <q-item-label caption>
              <span v-if="quiz.started">Status: <span class="text-green">Active</span> <br> Started at: {{quiz.started_date_formatted}}</span>
              <span v-else-if="quiz.stopped_date">Status: <span class="text-red">Inactive</span> <br> Stopped at: {{quiz.stopped_date_formatted}}</span>
              <span v-else>Status: {{`Not Started` }}</span>
            </q-item-label>
            <q-item-label caption>
              <span>Score: {{ quiz?.score.score || 'Ungraded' }} / {{quiz?.points}}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <div class="row q-gutter-xs" v-if="isTeacher">
              <q-btn v-ripple :to="`/courses/${course.id}/quizzes/${quiz?.id}`" color="purple" size="12px" label="View" />
              <q-btn v-ripple v-if="!quiz.started" size="12px" color="primary" label="Start" @click="toggleStatus(quiz,1)" :loading="toggleLoading"/>
              <q-btn v-ripple v-else size="12px" color="red" label="Stop" @click="toggleStatus(quiz,0)" :loading="toggleLoading"/>
            </div>
            <div class="row q-gutter-xs" v-else-if="quiz.started">
              <q-btn v-ripple :to="`/courses/${course.id}/quizzes/${quiz?.id}/take`" color="primary" size="12px" label="Take" />
            </div>
          </q-item-section>
        </q-item>
      </template>
      <template v-else>
        <div class="text-subtitle text-center" v-if="isStudent">You have no active quizzes.</div>
        <div class="text-subtitle  text-center" v-else-if="isTeacher">You haven't added any quizzes yet.</div>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import store from "../../../store";
import courseService from "../../../services/course";
import quizService from "../../../services/quiz";
import HeaderMenu from "../HeaderMenu.vue"
import { date } from 'quasar'

export default defineComponent({
  name: "QuizIndex",
  data() {
    return {
      loading: false,
      toggleLoading: false,
    };
  },
  components: {
    HeaderMenu
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      quizzes: "allQuizzes",
      course: "currentCourse",
      isTeacher: "isTeacher",
      isStudent: "isStudent",
    }),
  },
  mounted() {
    const resources = [quizService.all(this.$route.params.id)];
    if (!this.course) {
      resources.push(courseService.show(this.$route.params.id));
    }
    this.loading = true;
    Promise.all(resources)
        .then((data) => {
          if (!this.course){
            store.dispatch("setCurrentCourse", data[1]);
          }
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
  },
  methods: {
    formatDate(timestamp) {
      return date.formatDate(timestamp, 'YYYY-MM-DD');
    },
    toggleStatus(quiz,started) {
      this.toggleLoading = true;
      quizService
      .toggle(quiz.id,{started})
      .then((data) => {
          this.toggleLoading = false;
          store.dispatch('updateQuiz', data);
        })
        .catch((err) => {
          this.toggleLoading = false;
        });
    }
  },
});
</script>
