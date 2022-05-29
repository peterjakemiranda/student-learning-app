<template>
  <div class="q-pa-sm">
    <q-page-sticky
      expand
      position="top-left"
      class="full-width"
      style="z-index: 1"
    >
      <q-breadcrumbs
        class="text-grey bg-white full-width q-px-lg q-py-sm text-body1"
      >
        <q-breadcrumbs-el v-if="course" :to="`/courses/${course.id}/students`" :label="course?.title || 'Course'"/>
        <q-breadcrumbs-el icon="description" label="Students"/>
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="text-h5 q-mb-sm q-pt-xl q-pb-xs">Add Student</div>
    <div>
      <q-btn
        v-if="course"
        :to="`/courses/${course.id}/students/invite`"
        color="primary"
        icon="add"
        label="Add New"
        class="q-mb-md"
      />
      <div class="q-pt-sm">
        <q-input
          bottom-slots
          filled
          debounce="800"
          v-model="searchText"
          ref="searchInput"
          dense
          class="q-pa-sm q-mb-lg"
        >
          <template v-slot:append>
            <q-icon
              v-if="searchText !== ''"
              name="close"
              @click="clearSearch"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>

        </q-input>
        <div class="text-center" v-if="loading">
          <q-spinner-hourglass
            color="primary"
            size="2em"
          />
        </div>
        <q-list class="q-pa-xs" separator v-else-if="students.items.length">
          <q-item
            v-for="student in students.items"
            :key="student.id"
          >
            <q-item-section to="">
              <q-item-label class="text-subtitle1">
                {{ student.fullname }}
              </q-item-label>
              <q-item-label caption lines="2">
                {{ student.email }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <div class="row justify-center q-gutter-md q-pa-xs q-mt-md">
                <q-btn color="secondary" label="View Profile" @click="view(student)"/>
                <q-btn outline color="primary" label="Add" @click="add(student)"/>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
        <div v-else class="text-body2 text-center q-pa-lg text-grey-6">
          <span v-if="searchText">No Results</span>
          <span v-else>Search by name or email.</span>
        </div>
      </div>
    </div>
  </div>
  <q-dialog v-model="viewProfileModal" @hide="hideProfileModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">View Profile</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="min-width: 350px" class="scroll">
          <q-list dense bordered padding class="rounded-borders">
            <q-item>
              <q-item-section>
                Name: {{profile?.fullname}}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                Email: {{profile?.email}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Ok" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../../../services/course";
import studentService from "../../../services/student";
import store from "../../../store";

export default defineComponent({
  name: "SearchStudent",
  data() {
    return {
      viewProfileModal: false,
      loading: false,
      searchText: "",
      page: 1,
      limit: 10,
      profile: null,
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      course: "currentCourse",
      students: "students",
      searchQuery: "studentQuery",
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
    const query = {
      page: this.page,
      limit: this.limit,
      search: this.searchQuery.search,
    };
    store.dispatch("setStudentQuery", query);
    this.$refs.searchInput.focus();
    if (!this.searchText) {
      this.$store.dispatch("resetStudents");
    }
  },
  methods: {
    search() {
      this.loading = true;
      studentService
        .search({
          page: this.searchQuery.page,
          limit: this.searchQuery.limit,
          sort: this.sort,
          search: this.searchQuery.search,
          course_id: this.course?.id
        })
        .then((data) => {
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    clearSearch() {
      this.searchText = "";
      this.$refs.searchInput.focus();
    },
    add(student) {
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure to add ${student.fullname} to ${this.course.title}? The student will receive an email notification.`,
        cancel: true,
        persistent: true,
      }).onOk(() => {
        studentService
        .add({
          student_id: student.id,
          course_id: this.course?.id
        })
        .then((data) => {
          this.loading = false;
          store.dispatch('removeStudent', student.id);
          this.$q.dialog({
            title: 'Success',
            message: 'Successfully added student to the course.'
          })
        })
        .catch((errors) => {
          this.loading = false;
        });
      })
    },
    view(student) {
      this.profile = student;
      this.viewProfileModal = true;
    },
    hideProfileModal() {
      this.profile = null;
    }
  },
  watch: {
    searchText(searchText) {
      if (!this.searchText) {
        this.$store.dispatch("resetStudents");
        return;
      }
      const query = {
        page: this.page,
        limit: this.limit,
        search: searchText,
      };
      store.dispatch("setStudentQuery", query);
      this.search()
    },
  },
});
</script>
