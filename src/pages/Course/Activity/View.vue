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
        <q-breadcrumbs-el icon="description" label="View Activity"/>
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="text-h5 q-mb-lg q-pt-xl q-pb-xs">{{activity?.title}}</div>
    <div class="text-center" v-if="loading">
      <q-spinner-bars
        color="primary"
        size="2em"
      />
    </div>
    <div v-else>
      <div class="q-pa-sm q-gutter-sm" style="height: 600px;">
        <q-pdfviewer
          type="html5"
          src="http://learning-api.local/storage/uploads/files/1bc24ccc-6279-43e0-af83-fc10f24964bd.pdf"
        />
        <q-form
          v-if="isStudent && allowSubmission"
          @submit="onSubmit"
          class="q-gutter-md"
          style="max-width: 800px"
        >
          <div class="q-gutter-sm q-pt-lg" style="max-width: 400px" v-if="activity?.submission_type === 'file_upload'">
            <q-file
              v-model="file"
              label="Upload your answer"
              square
              flat
              outlined
              use-chips
              clearable
              accept=".pdf,.jpg,.png,.gif"
              max-files="1"
              max-file-size="5120000"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>
          <div class="q-pa-sm q-pt-xs" v-else>
            <span class="label q-pt-md q-pb-sm">Write your Answer *</span>
            <q-editor
              v-model="content"
              filled
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Content is required']"
            />
          </div>
          <div class="q-gutter-lg q-pa-lg row justify-center">
            <q-btn label="Submit Answer" type="submit" color="primary" />
            <q-btn :to="`/courses/${course?.id}/activities`" label="Back" type="submit" color="secondary" />
          </div>
        </q-form>
        <div v-else>
          <div class="row justify-center" v-if="isStudent">
            <span class="label q-pa-lg q-text-left">Answer Submitted At: {{ formatDate(activity?.updated_at)}}</span>
          </div>
          <grading :course="course" :activity="activity"/>
          <!-- <q-btn label="Update Answer" type="submit" color="primary" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import store from "../../../store";
import courseService from "../../../services/course";
import activityService from "../../../services/activity";
import { date } from 'quasar'
import Grading from './Grading.vue';

export default defineComponent({
  name: "ActivityView",
  data() {
    return {
      loading: false,
      activity: null,
      file: null,
      content: null,
      resubmit: 0,
    };
  },
  components: {
    Grading,
  },
  computed: {
    ...mapGetters({
      activities: "allActivities",
      course: "currentCourse",
      isStudent: "isStudent",
      isTeacher: "isTeacher",
    }),
    allowSubmission() {
      return !this.activity?.answers.length || this.resubmit === 1;
    }
  },
  mounted() {
    const resources = [activityService.show(this.$route.params.activity_id)];
    if (!this.course) {
      resources.push(courseService.show(this.$route.params.id));
    }
    this.loading = true;
    Promise.all(resources)
        .then((data) => {
          this.activity = data[0] || null;
          if (!this.course){
            store.dispatch("setCurrentCourse", data[1]);
          }
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
  },
  methods: {
    onSubmit() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('content', this.content);
      formData.append('submission_type', this.activity.submission_type);
      activityService.submitAnswer(this.$route.params.activity_id, formData)
      .then((data) => {
        this.activity.answers = data.answers || null;
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
      });
    },
    formatDate(timestamp) {
      return date.formatDate(timestamp, 'YYYY-MM-DD HH:mm:ss');
    }
  },
});
</script>
