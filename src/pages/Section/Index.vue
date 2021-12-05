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
          to="/admin/courses"
          icon="keyboard_arrow_left"
          label="All Courses"
        />
        <q-breadcrumbs-el
          icon="local_library"
          :label="`${currentCourse.title} Sections`"
          v-if="currentCourse"
        />
      </q-breadcrumbs>
    </q-page-sticky>
    <div
      class="text-h5 q-mb-md"
      style="padding-top: 48px"
      v-if="currentCourse"
    >
      {{ currentCourse.title }}
    </div>
    <q-btn
      :to="`/admin/courses/${$route.params.course_id}/sections/create`"
      color="primary"
      icon="add"
      label="Create Section"
    />
    <q-list padding>
      <q-item v-ripple v-for="section in sections" :key="section.id">
        <q-item-section>
          <q-item-label lines="1">{{ section.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="q-gutter-sm">
            <q-btn
              flat
              round
              size="12px"
              icon="edit"
              :to="`/admin/courses/${$route.params.course_id}/sections/${section.id}/edit`"
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
import sectionService from "../../services/activity";

export default defineComponent({
  name: "AdminSectionIndex",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      sections: "allSections",
    }),
    currentCourse() {
      return this.courses.find(
        (c) => +c.id === +this.$route.params.course_id
      );
    },
  },
  mounted() {
    sectionService
      .all(this.$route.params.course_id)
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
  },
  methods: {
    onReset() {},
    remove(section) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to delete this section?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          sectionService
            .destroy(section.id, section.course_id)
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