<template>
  <div class="q-pa-md">
    <div class="text-h5 q-py-md">{{ id ? "Update" : "Create" }} Course</div>

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
      style="max-width: 800px"
    >
      <q-input filled v-model="title" label="Title" 
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Title is required']"
      />
      <q-input filled v-model="course_code" label="Course Code" 
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Course code is required']"
      />
      <q-input filled v-model="period" label="Period" 
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Period is required']"
      />
      <q-input filled v-model="virtual_class_link" label="Virtual Class Link" />
      <q-input
        v-model="description"
        filled
        label="Description"
        type="textarea"
      />

      <div class="q-gutter-lg q-pa-lg">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Back"
          type="submit"
          to="/courses"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import courseService from "../../services/course";
import { mapGetters, mapMutations } from "vuex";
import store from "../../store";

export default defineComponent({
  name: "AdminCourseForm",
  data() {
    return {
      id: "",
      title: "",
      course_code: "",
      period: "",
      virtual_class_link: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters({
      course: "currentCourse",
      sections: "allCourses",
    }),
  },
  mounted() {
    this.loading = true;
    if (this.$route.params.id) {
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
    onSubmit() {
      const params = {
          title: this.title,
          course_code: this.course_code,
          period: this.period,
          description: this.description,
          virtual_class_link: this.virtual_class_link,
        };
      const resource = this.id ? courseService.update(this.id, params) : courseService.store(params);
      Promise.all([resource])
      .then((data) => {
          this.loading = false;
          this.$q.dialog({
            message: this.id ? `Successfully updated course ${this.course.title}.` : `Successfully created course!`,
          }).onOk(() => {
            this.id = null;
            this.title = null;
            this.course_code = null;
            this.period = null;
            this.description = null;
            this.virtual_class_link = null;
            this.$router.push('/courses');
          });
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    setValues(course) {
      this.id = course.id;
      this.title = course.title;
      this.course_code = course.course_code;
      this.period = course.period;
      this.virtual_class_link = course.virtual_class_link;
      this.description = course.description;
    }
  },
  watch: {
    course(course) {
      if (course) {
        this.setValues(course);
      }
    },
  },
});
</script>
