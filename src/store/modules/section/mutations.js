import {
  FETCH_SECTIONS,
  APPEND_SECTIONS,
  RESET_SECTIONS,
  FETCH_ALL_SECTIONS,
  SECTION_QUERY,
  UPDATE_SECTION,
  FETCH_SEARCH_RESULTS,
  SET_SEARCH_TEXT,
} from "../../mutation-types";

export default {
  [FETCH_SECTIONS](state, { sections, pagination }) {
    state.items = sections;
    state.pagination = pagination;
  },

  [APPEND_SECTIONS](state, { sections, pagination }) {
    state.items = [...state.items, ...sections];
    state.pagination = pagination;
  },

  [RESET_SECTIONS](state) {
    state.all = [];
    state.items = [];
    state.searchResults = [];
    state.pagination = {};
  },

  [FETCH_ALL_SECTIONS](state, sections) {
    state.all = sections;
  },

  [FETCH_SEARCH_RESULTS](state, sections) {
    state.searchResults = sections;
  },

  [SECTION_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },

  [UPDATE_SECTION](state, payload) {
    const index = state.all.findIndex((item) => item.id === payload.id);
    if (index !== -1) state.all.splice(index, 1, payload);
  },

  [SET_SEARCH_TEXT](state, searchText) {
    state.searchText = searchText;
  },
};
