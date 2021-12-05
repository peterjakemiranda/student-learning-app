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
        :to="`/courses/${course.id}/announcements/create`"
        color="primary"
        icon="add"
        label="Create Announcement"
        class="q-mb-md"
      />
      <q-list>
          <q-item v-for="announcement in announcements" :key="announcement.id">
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
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../../../services/course";
import announcementService from "../../../services/announcement";
import HeaderMenu from "../HeaderMenu.vue"
import store from "../../../store";

export default defineComponent({
  name: "ViewAnnouncement",
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
      announcements: "allAnnouncements",
      course: "currentCourse",
      isTeacher: "isTeacher",
    }),
  },
  mounted() {
    const resources = [announcementService.all(this.$route.params.id)];
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
    
  },
});
</script>
