<template>
  <div class="q-pa-md">
    <div class="text-h5 q-py-md">{{ id ? "Update" : "Create" }} Article</div>

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="title"
        label="Title *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Title is required']"
      />

      <q-input
        v-model="description"
        filled
        type="textarea"
        label="Description"
      />

      <div class="q-gutter-lg q-pa-lg">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Back" type="submit" to="/admin/chapters" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import chapterService from "../../../services/chapter";

export default defineComponent({
  name: "AdminChapterForm",
  data() {
    return {
      id: "",
      title: "",
      description: "",
    };
  },
  created() {
    if (this.$route.params.id) {
      chapterService
        .show(this.$route.params.id)
        .then((data) => {
          this.id = data.id;
          this.title = data.title;
          this.description = data.description;
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
      chapterService
        .store({ title: this.title, description: this.description })
        .then((data) => {
          this.loading = false;
          this.$router.push("/admin/chapters");
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    update() {
      chapterService
        .update(this.id, { title: this.title, description: this.description })
        .then((data) => {
          this.loading = false;
          this.$router.push("/admin/chapters");
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
    onReset() {},
  },
});
</script>
