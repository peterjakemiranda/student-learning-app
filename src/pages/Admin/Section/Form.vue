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
        v-model="chapter"
        :options="chapterOptions"
        label="Chapter"
      />

      <q-input filled v-model="title" label="Title" />

      <q-editor
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
          :to="`/admin/chapters/${$route.params.chapter_id}/sections`"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import chapterService from "../../../services/chapter";
import sectionService from "../../../services/section";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "AdminSectionForm",
  data() {
    return {
      id: "",
      title: "",
      content: "",
      chapter: "",
    };
  },
  computed: {
    ...mapGetters({
      chapters: "allChapters",
      sections: "allSections",
    }),
    chapterOptions() {
      return this.chapters.map((c) => ({ label: c.title, value: c.id }));
    },
  },
  mounted() {
    if (!this.chapters.length) {
      chapterService
        .all()
        .then((data) => {
          this.loading = false;
          this.setCurrentChapter();
        })
        .catch((errors) => {
          this.loading = false;
        });
    } else {
      this.setCurrentChapter();
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
          chapter_id: this.chapter.value,
        })
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/admin/chapters/${this.$route.params.chapter_id}/sections`
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
          chapter_id: this.chapter.value,
        })
        .then((data) => {
          this.loading = false;
          this.$router.push(
            `/admin/chapters/${this.$route.params.chapter_id}/sections`
          );
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    setCurrentChapter() {
      this.chapter = this.chapterOptions.find(
        (o) => +o.value === +this.$route.params.chapter_id
      );
    },
    onReset() {},
  },
  watch: {
    chapters(chapters) {},
  },
});
</script>
