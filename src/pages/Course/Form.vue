<template>
  <div class="q-pa-md">
    <div class="text-h5 q-py-md">{{ id ? "Update" : "Create" }} Course</div>

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
      style="max-width: 800px"
    >
      <q-input filled v-model="title" label="Title" />
      <q-input filled v-model="course_code" label="Course Code" />
      <q-input filled v-model="period" label="Period" />

      <q-editor
        :toolbar="[
          ['left', 'center', 'right', 'justify', 'bold', 'italic', 'underline', 'hr', 'link', 'quote', 'unordered', 'ordered', 'outdent', 'indent'],
          [
            {
              label: $q.lang.editor.formatting,
              icon: $q.iconSet.editor.formatting,
              list: 'no-icons',
              options: [
                'p',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'code'
              ]
            },
          ],
          ['undo', 'redo'],
          ['viewsource']
        ]"
        v-model="description"
        filled
        label="Content *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Content is required']"
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
import sectionService from "../../services/activity";
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
      description: "",
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      sections: "allCourses",
    }),
    courseOptions() {
      return this.courses.map((c) => ({ label: c.title, value: c.id }));
    },
  },
  mounted() {
    if (!this.courses.length) {
      courseService
        .all()
        .then((data) => {
          this.loading = false;
          this.setCurrentCourse();
        })
        .catch((errors) => {
          this.loading = false;
        });
    } else {
      this.setCurrentCourse();
    }
  },
  methods: {
    onSubmit() {
      this.id ? this.update() : this.save();
    },
    save() {
      courseService
        .store({
          title: this.title,
          course_code: this.course_code,
          period: this.period,
          description: this.description,
        })
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `courses`
          );
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    update() {
      courseService
        .update(this.id, {
          title: this.title,
          course_code: this.course_code,
          period: this.period,
          description: this.description,
        })
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/courses`
          );
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    setCurrentCourse() {
      this.course = this.courseOptions.find(
        (o) => +o.value === +this.$route.params.course_id
      );
    },
    onReset() {},
  },
  watch: {
    courses(courses) {},
  },
});
</script>
