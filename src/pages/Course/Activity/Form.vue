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
        <q-breadcrumbs-el v-if="course" :to="`/courses/${course.id}/activities`" :label="course?.title || 'Course'"/>
        <q-breadcrumbs-el icon="description" label="Create Activity"/>
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="text-h5 q-mb-lg q-pt-xl q-pb-xs">{{ id ? "Update" : "Create" }} Activity</div>
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
      <div class="q-gutter-md q-ml-none" style="max-width: 400px">
        <q-input filled v-model="title" label="Title"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please input title']"/>
        <q-input filled v-model="points" label="Points" 
        lazy-rules
        :rules="[(val) => (val && val > 0) || 'Please input points']"/>
        <span class="label q-mt-lg block">Due Date:</span>
        <q-input filled v-model="due_date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="due_date" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="due_date" mask="YYYY-MM-DD HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-file
          v-model="file"
          label="Activity PDF"
          square
          flat
          outlined
          use-chips
          clearable
          accept=".pdf,.jpg,.png,.gif"
          max-files="1"
          max-file-size="5120000"
          @rejected="onRejected"
          lazy-rules
          :rules="[(val) => (val || id) || 'Please provide the activity pdf.']"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </div>
        <!-- <div class="q-gutter-sm q-mt-md">
          <span class="label">Submission type:</span>
          <q-radio v-model="submission_type" val="file_upload" label="File Upload" />
          <q-radio v-model="submission_type" val="text_entry" label="Text Entry" />
        </div> -->
        <div class="q-pa-sm q-pt-xs">
          <span class="label q-pt-md q-pb-sm">Instructions:</span>
          <q-editor
            v-model="body"
            filled
            label="Body *"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Content is required']"
          />
        </div>
        <q-toggle v-model="draft" label="Is Draft?" />
        <div class="q-gutter-lg q-pa-lg">
          <q-btn label="Save" type="submit" color="primary" :loading="loading"/>
          <q-btn
            label="Back"
            type="submit"
            v-if="course"
            :to="`/courses/${course.id}/activities`"
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
import activityService from "../../../services/activity";
import store from "../../../store";

export default defineComponent({
  name: "ViewActivity",
  data() {
    return {
      loading: false,
      id: "",
      title: "",
      points: "",
      due_date: "",
      submission_type: "file_upload",
      body: "",
      file: null,
      draft: false,
    };
  },
  computed: {
    ...mapGetters({
      courses: "allCourses",
      course: "currentCourse",
    }),
  },
  mounted() {
    const resources = this.$route.params.activity_id ? [activityService.show(this.$route.params.activity_id)] : [];
    if (!this.course) {
      resources.push(courseService.show(this.$route.params.id));
    }
    this.loading = true;
    Promise.all(resources)
        .then((data) => {
          if (this.$route.params.activity_id && data[0]) {
            const quiz = data[0];
            this.id = quiz.id;
            this.title = quiz.title;
            this.points = quiz.points;
            this.due_date = quiz.due_date;
            this.submission_type = quiz.submission_type;
            this.body = quiz.body;
            this.draft = quiz.draft ? true : false;
          }
          if (!this.course) {
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
      const formData = new FormData()
      formData.append('file', this.file);
      formData.append('title', this.title);
      formData.append('points', this.points);
      formData.append('display_date', this.display_date);
      formData.append('due_date', this.due_date);
      formData.append('submission_type', this.submission_type);
      formData.append('body', this.body);
      formData.append('course_id', this.course.id);
      formData.append('draft', this.draft ? 1 : 0);

      const resource = this.id ? activityService.update(this.id, formData) : activityService.store(formData);
      Promise.all([resource])
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/courses/${this.course.id}/activities`
          );
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    onRejected (entries) {
      if (entries.length > 0) {
        switch (entries[0].failedPropValidation) {
          case 'max-file-size':
            this.$q.notify({
              position: 'top',
              type: 'negative',
              message: 'File exceeds 5MB.'
            })

            break;
        }
      }
    }
  },
});
</script>
