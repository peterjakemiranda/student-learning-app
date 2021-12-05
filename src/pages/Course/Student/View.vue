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
        v-if="course"
        :to="`/courses/${course.id}/students/add`"
        color="primary"
        icon="add"
        label="Add Students"
        class="q-mb-md q-ml-md"
      />
      <q-item class="q-pa-sm" clickable v-ripple v-for="student in students" :key="student.id">
        <q-item-section avatar top>
          <q-avatar icon="face" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{student.fullname}}</q-item-label>
          <q-item-label caption>{{student.email}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" color="green" />
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../../../services/course";
import HeaderMenu from "../HeaderMenu.vue"
import store from "../../../store";
import studentService from "../../../services/student";

export default defineComponent({
  name: "ViewStudent",
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
      students: "allStudents",
      course: "currentCourse",
    }),
  },
  mounted() {
    const resources = [studentService.all({
        by_course: 1,
        course_id: this.$route.params.id
      })];
    if (!this.course) {
      resources.push(courseService.show(this.$route.params.id));
    }
    this.loading = true;
    Promise.all(resources)
      .then((data) => {
        this.loading = false;
        if (data[1]) {
          store.dispatch("setCurrentCourse", data);
        }
      })
      .catch((errors) => {
        this.loading = false;
      });
  },
  methods: {
    
  },
});
</script>
