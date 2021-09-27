<template>
  <div class="q-pa-md">
    <q-page-sticky
      expand
      position="top-left"
      class="full-width"
      style="z-index: 1"
    >
      <q-breadcrumbs
        class="text-grey bg-white full-width q-px-lg q-py-sm text-body1"
      >
        <q-breadcrumbs-el to="/" icon="menu_book" label="My Handbook" />
        <q-breadcrumbs-el icon="local_library" label="Search" />
      </q-breadcrumbs>
    </q-page-sticky>
    <div class="q-pt-lg">
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

        <template v-slot:hint> Search the entire handbook </template>
      </q-input>
      <q-list class="q-pa-xs" separator v-if="sections.length">
        <q-item
          :to="`/article/${section.chapter_id}#section-${section.id}`"
          v-for="section in sections"
          :key="section.id"
        >
          <q-item-section to="">
            <q-item-label class="text-subtitle1">
              {{ titleCase(section.title) }}
            </q-item-label>
            <q-item-label caption lines="2">{{
              stripTags(section.content)
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div v-else class="text-body2 text-center q-pa-lg text-grey-6">
        No Results
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import sectionService from "../../services/section";
import chapterService from "../../services/chapter";
import bookmarkService from "../../services/bookmark";
import store from "../../store";

export default defineComponent({
  name: "Search",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      sections: "searchResults",
    }),
    searchText: {
      get() {
        return this.$store.state.section.searchText;
      },
      set(value) {
        this.$store.commit("SET_SEARCH_TEXT", value);
      },
    },
  },
  mounted() {
    this.$refs.searchInput.focus();
    if (!this.searchText) {
      this.$store.dispatch("resetSections");
    }
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
    stripTags(str) {
      return str.replace(/<\/?[^>]+(>|$)/g, "").replace(/\&nbsp;/g, "");
    },
    clearSearch() {
      this.searchText = "";
      this.$refs.searchInput.focus();
    },
  },
  watch: {
    searchText() {
      if (!this.searchText) {
        this.$store.dispatch("resetSections");
        return;
      }
      sectionService
        .search(this.searchText)
        .then((data) => {
          this.loading = false;
        })
        .catch((errors) => {
          this.loading = false;
        });
    },
  },
});
</script>
