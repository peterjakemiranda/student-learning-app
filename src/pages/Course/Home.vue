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
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h7 q-mt-xs q-mb-xs">Course Code: {{course?.course_code}}</div>
            <div class="text-h7 q-mt-xs q-mb-xs flex items-center" v-if="course?.virtual_class_link">Virtual Class: <a target="_blank" :href="course.virtual_class_link" style="margin-left: 10px"><img :src="getVirtualClassLogo(course.virtual_class_link)" style="height: 50px;"/></a></div>
            <div class="text-caption text-grey" v-if="course?.description">{{course?.description}}</div>
            <div class="text-caption text-grey" v-if="course?.start">{{course.start}} - {{course.end}}</div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions v-if="course?.period">
          <q-btn flat round icon="event" />
          <q-btn flat>
            {{course?.period}}
          </q-btn>
        </q-card-actions>

        <q-separator />

        <q-card-section class="q-pt-xs">
          <div class="text-h6 q-mt-sm q-mb-xs">Activities due until tommorow:</div>
          <div v-if="course?.activities.length">
            <q-item class="q-pa-sm" clickable :to="`/courses/${course?.id}/activities/${activity?.id}`" v-for="activity in course?.activities" :key="activity.id">
              <q-item-section>
                <q-item-label lines="1">{{activity.title}}</q-item-label>
                <q-item-label caption v-if="activity.due_date">Due:{{ activity.due_date_formatted }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div v-else caption>No activity is due tommorow</div>
        </q-card-section>
        <q-card-section class="q-pt-xs">
          <div class="text-h6 q-mt-sm q-mb-xs">Active Quizzes</div>
          <div v-if="course?.quizzes.length">
            <q-item class="q-pa-sm" clickable :to="`/courses/${course?.id}/quizzes/${quiz?.id}`" v-for="quiz in course?.quizzes" :key="quiz.id">
              <q-item-section>
                <q-item-label lines="1">{{quiz.title}}</q-item-label>
                <q-item-label caption v-if="quiz.started_date">Started:{{ quiz.started_date_formatted }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div v-else caption>No active quiz</div>
        </q-card-section>
        <q-card-section class="q-pt-xs">
          <div class="text-h6 q-mt-sm q-mb-xs">Latest Announcements</div>
          <q-list v-if="course?.announcements?.length">
            <q-item v-for="announcement in course?.announcements" :key="announcement.id">
              <q-item-section>
                <q-item-label v-if="announcement.title">{{ announcement.title }}</q-item-label>
                <q-item-label caption class="ellipsis-2-lines">{{ announcement.body }}</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>{{ announcement.created_date_formatted}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset />
          </q-list>
          <div v-else caption>No new announcement</div>
        </q-card-section>

        <q-separator />
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../../services/course";
import HeaderMenu from "./HeaderMenu.vue"
import store from "../../store";
import jitsiMeetLogo from "../../assets/jitsi.png";
import googleMeetLogo from "../../assets/google-meet.png";
import videoCamLogo from "../../assets/video-camera-icon.png";

export default defineComponent({
  name: "ViewCourse",
  components: {
    HeaderMenu
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      course: "currentCourse",
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
    getVirtualClassLogo(link) {
      if(link.includes('meet.jit.si')) {
        return jitsiMeetLogo;
      }
      if(link.includes('meet.google.com')) {
        return googleMeetLogo;
      }
      return videoCamLogo;
    }
  },
});
</script>
