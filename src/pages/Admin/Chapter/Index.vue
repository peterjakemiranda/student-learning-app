<template>
  <div class="q-pa-md q-gutter-md">
    <h4 class="text-h4 q-mb-xs">Courses</h4>
    <q-btn
      :to="`/admin/courses/create`"
      color="primary"
      icon="add"
      label="Create Course"
    />
    <q-list padding>
      <q-item v-ripple v-for="course in courses" :key="course.id">
        <q-item-section>
          <q-item-label lines="1">{{ course.title }}</q-item-label>
          <q-item-label caption>{{ course.description }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="q-gutter-sm">
            <q-btn
              flat
              round
              size="12px"
              color="primary"
              icon="list"
              :to="`/admin/courses/${course.id}/sections`"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Manage Sections
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              size="12px"
              icon="edit"
              :to="`/admin/courses/${course.id}/edit`"
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
              @click="remove(course)"
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
  name: "AdminCourseIndex",
  data() {
    return {
      title: "",
      description: "",
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
