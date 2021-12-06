<template>
  <div class="q-pa-sm">
    <q-page-sticky position="top-left" style="z-index: 1;">
      <div class="text-h5 q-pa-md">My Courses</div>
    </q-page-sticky>
      <div class="text-center q-pt-xl" v-if="coursesLoading">
        <q-spinner-hourglass
          color="primary"
          size="2em"
        />
      </div>
      <div style="padding-top: 68px" v-else>
        <q-card 
          class="course-card q-mb-md" 
          bordered
          flat
          @click="gotoCourse(course)"
          v-for="course in courses"
          :key="course.id"
          clickable
          ripple
          >
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">{{course.course_code}}</div>
              <div class="text-h5 text-primary q-mt-sm q-mb-xs">{{course.title}}</div>
              <div class="text-caption text-grey-100">
                {{course.description}}
              </div>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat>
              {{course.period}}
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../services/course";
import bookmarkService from "../services/bookmark";
import { format } from "quasar";
import store from "../store";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      tab: "mycourses",
      coursesLoading: false,
      bookmarkLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      bookmarks: "allBookmarks",
    }),
  },
  mounted() {
    this.coursesLoading = true;
    courseService
      .all()
      .then((data) => {
        this.coursesLoading = false;
      })
      .catch((errors) => {
        this.coursesLoading = false;
      });
  },
  methods: {
    
    viewCourse(bookmark) {
      this.$router.push(
        `/course/${bookmark.course_id}#section-${bookmark.section_id}`
      );
    },
    deleteBookmark(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to delete this bookmark?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          bookmarkService
            .destroy(id)
            .then((data) => {
              this.loading = false;
            })
            .catch((errors) => {
              this.loading = false;
            });
        });
    },
    gotoCourse(course) {
      store.dispatch("setCurrentCourse", course);
      this.$router.push(`/courses/${course.id}`);
    }
  },
  watch: {
    tab(tab) {
      if (tab === "bookmarks") {
        this.bookmarkLoading = true;
        bookmarkService
          .all()
          .then((data) => {
            this.bookmarkLoading = false;
          })
          .catch((errors) => {
            this.bookmarkLoading = false;
          });
      }
    },
  },
});
</script>
