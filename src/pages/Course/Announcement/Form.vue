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
        <q-breadcrumbs-el :to="`/courses/${course?.id}/activities`" :label="course?.title || 'Course'"/>
        <q-breadcrumbs-el icon="description" label="Create Announcement"/>
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="text-h5 q-mb-lg q-pt-xl q-pb-xs">{{ id ? "Update" : "Create" }} Announcement</div>
    <div class="text-center" v-if="loading">
      <q-spinner-hourglass
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        style="max-width: 800px"
      >
        <q-input filled v-model="title" label="Title (Optional)" />
        <span class="label q-mt-lg block">Announcement:</span>
        <q-editor
            v-model="body"
            filled
            label="Body *"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Content is required']"
          />

        <div class="q-gutter-lg q-pa-lg">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Back"
            type="submit"
            v-if="course"
            :to="`/courses/${course.id}/announcements`"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import courseService from "../../../services/course";
import announcementService from "../../../services/announcement";
import store from "../../../store";

export default defineComponent({
  name: "ViewActivity",
  data() {
    return {
      loading: false,
      id: "",
      title: "",
      body: "",
    };
  },
  computed: {
    ...mapGetters({
      course: "currentCourse",
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
  },
  methods: {
    onSubmit() {
      announcementService.store({
        title: this.title,
        body: this.body,
        course_id: this.course.id,
      })
      .then((data) => {
        this.$q.dialog({
          message: `Successfully sent announcement to ${this.course.title} students.`,
        }).onOk(() => {
          this.$router.push(`/courses/${this.course.id}/announcements`);
        });
        
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
      });
    }
  },
});
</script>
