<template>
  <div class="q-pa-md">
    <div class="text-h5 q-py-md">{{ id ? "Update" : "Create" }} Section</div>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      style="max-width: 800px"
    >
      <q-select
        filled
        map-options
        v-model="course"
        :options="courseOptions"
        label="Course"
      />

      <q-input filled v-model="title" label="Title" />

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
        v-model="content"
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
          :to="`/admin/courses/${$route.params.course_id}/sections`"
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

export default defineComponent({
  name: "AdminSectionForm",
  data() {
    return {
      id: "",
      title: "",
      content: "",
      course: "",
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      sections: "allSections",
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
    if (this.$route.params.id) {
      sectionService
        .show(this.$route.params.id)
        .then((data) => {
          this.id = data.id;
          this.title = data.title;
          this.content = data.content;
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
    }
  },
  methods: {
    onSubmit() {
      this.id ? this.update() : this.save();
    },
    save() {
      sectionService
        .store({
          title: this.title,
          content: this.content,
          course_id: this.course.value,
        })
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/admin/courses/${this.$route.params.course_id}/sections`
          );
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    update() {
      sectionService
        .update(this.id, {
          title: this.title,
          content: this.content,
          course_id: this.course.value,
        })
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/admin/courses/${this.$route.params.course_id}/sections`
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
