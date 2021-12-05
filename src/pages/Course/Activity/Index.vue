<template>
  <div class="q-pa-sm">
    <header-menu/>
    <div class="text-center" v-if="loading">
      <q-spinner-bars
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
      <q-btn
        v-if="course && isTeacher"
        :to="`/courses/${course.id}/activities/create`"
        color="primary"
        icon="add"
        label="Create Activity"
        class="q-mb-md"
      />
      <q-item :to="`/courses/${course.id}/activities/${activity?.id}`" class="q-pa-sm" clickable v-ripple  v-for="activity in activities" :key="activity.id">
        <q-item-section avatar top>
          <q-avatar icon="assignment" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{activity.title}}</q-item-label>
          <q-item-label caption v-if="activity.due_date">Due:{{ activity.due_date_formatted }} | Submitted: {{activity.answers_count}} of {{course.students_count}}</q-item-label>
        </q-item-section>

        <q-item-section side v-if="!isTeacher">
          <q-icon name="thumb_up" color="green" v-if="activity?.answers.length"/>
          <q-icon name="notifications_active" color="warning" v-else/>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import store from "../../../store";
import courseService from "../../../services/course";
import activityService from "../../../services/activity";
import HeaderMenu from "../HeaderMenu.vue"
import { date } from 'quasar'

export default defineComponent({
  name: "ActivityIndex",
  data() {
    return {
      loading: false,
    };
  },
  components: {
    HeaderMenu
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      activities: "allActivities",
      course: "currentCourse",
      isTeacher: "isTeacher",
    }),
  },
  mounted() {
    const resources = [activityService.all(this.$route.params.id)];
    if (!this.course) {
      resources.push(courseService.show(this.$route.params.id));
    }
    this.loading = true;
    Promise.all(resources)
        .then((data) => {
          console.log(this.course);
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
    }
  },
});
</script>
