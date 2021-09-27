<template>
  <div>
    <q-page-sticky expand position="top" style="z-index: 1">
      <q-tabs
        v-model="tab"
        narrow-indicator
        active-color="blue-8"
        class="bg-grey-1 full-width"
      >
        <q-tab name="myhandbook" label="My Handbook" icon="menu_book" />
        <q-tab name="bookmarks" label="My Bookmarks" icon="star" />
      </q-tabs>
    </q-page-sticky>

    <q-separator />

    <q-tab-panels
      v-model="tab"
      animated
      virtual-scroll
      style="padding-top: 68px"
    >
      <q-tab-panel name="myhandbook" class="q-pa-xs">
        <div>
          <q-list class="q-pa-sm" separator>
            <q-item
              :to="`/article/${chapter.id}`"
              v-for="chapter in chapters"
              :key="chapter.id"
            >
              <q-item-section>
                <q-item-label class="text-weight-bold text-subtitle1">{{
                  chapter.title
                }}</q-item-label>
                <q-item-label caption lines="2">{{
                  titleCase(chapter.description)
                }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="local_library" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-tab-panel>

      <q-tab-panel name="bookmarks" class="q-pa-xs">
        <div>
          <q-list class="q-pa-sm" separator>
            <q-item
              clickable
              @click.prevent="viewArticle(bookmark)"
              v-for="bookmark in bookmarks"
              :key="bookmark.id"
            >
              <q-item-section>
                <q-item-label class="text-subtitle1">
                  <q-icon name="star" color="yellow-9" class="q-pa-xs" />
                  <span>{{ titleCase(bookmark.title) }}</span>
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-btn
                  flat
                  icon="delete"
                  clickable
                  @click.stop="deleteBookmark(bookmark.id)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import chapterService from "../services/chapter";
import bookmarkService from "../services/bookmark";
import { format } from "quasar";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      tab: "myhandbook",
      handbookLoading: false,
      bookmarkLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      chapters: "allChapters",
      bookmarks: "allBookmarks",
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
    titleCase(str) {
      return str
        .split(" ")
        .map(function (val) {
          return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
        })
        .join(" ");
    },
    viewArticle(bookmark) {
      console.log(bookmark);
      this.$router.push(
        `/article/${bookmark.chapter_id}#section-${bookmark.section_id}`
      );
    },
    deleteBookmark(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to delete this bookmark?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          bookmarkService
            .destroy(id)
            .then((data) => {
              this.loading = false;
            })
            .catch((errors) => {
              this.loading = false;
            });
        });
    },
  },
  watch: {
    tab(tab) {
      if (tab === "bookmarks") {
        bookmarkService
          .all()
          .then((data) => {
            this.loading = false;
          })
          .catch((errors) => {
            this.loading = false;
          });
      }
    },
  },
});
</script>
