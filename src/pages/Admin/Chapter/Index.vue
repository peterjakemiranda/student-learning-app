<template>
  <div class="q-pa-md q-gutter-md">
    <h4 class="text-h4 q-mb-xs">Articles</h4>
    <q-btn
      :to="`/admin/chapters/create`"
      color="primary"
      icon="add"
      label="Create Article"
    />
    <q-list padding>
      <q-item v-ripple v-for="chapter in chapters" :key="chapter.id">
        <q-item-section>
          <q-item-label lines="1">{{ chapter.title }}</q-item-label>
          <q-item-label caption>{{ chapter.description }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="q-gutter-sm">
            <q-btn
              flat
              round
              size="12px"
              color="primary"
              icon="list"
              :to="`/admin/chapters/${chapter.id}/sections`"
            >
              <q-tooltip anchor="top middle" self="bottom middle">
                Manage Sections
              </q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              size="12px"
              icon="edit"
              :to="`/admin/chapters/${chapter.id}/edit`"
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
              @click="remove(chapter)"
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
import chapterService from "../../../services/chapter";

export default defineComponent({
  name: "AdminChapterIndex",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters({
      chapters: "allChapters",
    }),
  },
  mounted() {
    chapterService
      .all()
      .then((data) => {
        this.loading = false;
      })
      .catch((errors) => {
        this.loading = false;
      });
  },
  methods: {
    onReset() {},
    remove(chapter) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to delete this article?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          chapterService
            .destroy(chapter.id)
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
