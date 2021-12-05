<template>
  <div class="q-pa-md q-gutter-md">
    <q-page-sticky
      expand
      position="top-left"
      class="full-width"
      style="z-index: 1"
    >
      <q-breadcrumbs
        class="text-grey bg-white full-width q-px-lg q-py-sm text-body1"
      >
        <q-breadcrumbs-el
          to="/courses"
          icon="keyboard_arrow_left"
          label="All Courses"
        />
      </q-breadcrumbs>
    </q-page-sticky>
    <div
      class="text-h5 q-mb-md"
      style="padding-top: 48px"
    >
      Courses
    </div>
    <q-btn
      :to="`/courses/create`"
      color="primary"
      icon="add"
      label="Create Course"
    />
    <q-list padding>
      <q-item v-ripple v-for="course in courses" :key="course.id">
        <q-item-section>
          <q-item-label lines="1">{{ course.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="q-gutter-sm">
            <q-btn
              flat
              round
              size="12px"
              icon="edit"
              :to="`/courses/${course.id}/edit`"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Edit
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              size="12px"
              icon="delete"
              @click.prevent="remove(section)"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Delete
              </q-tooltip>
            </q-btn>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineComponent } from "vue";
import courseService from "../../services/course";

export default defineComponent({
  name: "CourseIndex",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
    }),
  },
  mounted() {
    courseService
      .all()
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
  },
  methods: {
    onReset() {},
    remove(course) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to delete this course?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          courseService
            .destroy(course.id)
            .then((data) => {
              this.loading = false;
            })
            .catch((errors) => {
              this.loading = false;
            });
        });
    },
  },
});
</script>