import {
  FETCH_CHAPTERS,
  APPEND_CHAPTERS,
  RESET_CHAPTERS,
  FETCH_ALL_CHAPTERS,
  CHAPTER_QUERY,
} from "../../mutation-types";

export default {
  [FETCH_CHAPTERS](state, { chapters, pagination }) {
    state.items = chapters;
    state.pagination = pagination;
  },

  [APPEND_CHAPTERS](state, { chapters, pagination }) {
    state.items = [...state.items, ...chapters];
    state.pagination = pagination;
  },

  [RESET_CHAPTERS](state) {
    state.all = [];
    state.items = [];
    state.pagination = {};
  },

  [FETCH_ALL_CHAPTERS](state, chapters) {
    state.all = chapters;
  },

  [CHAPTER_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },
};
