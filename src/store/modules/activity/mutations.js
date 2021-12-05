import {
  FETCH_ACTIVITIES,
  APPEND_ACTIVITIES,
  RESET_ACTIVITIES,
  FETCH_ALL_ACTIVITIES,
  ACTIVITY_QUERY,
  UPDATE_ACTIVITY,
  FETCH_SEARCH_RESULTS,
  SET_SEARCH_TEXT,
} from "../../mutation-types";

export default {
  [FETCH_ACTIVITIES](state, { activities, pagination }) {
    state.items = activities;
    state.pagination = pagination;
  },

  [APPEND_ACTIVITIES](state, { activities, pagination }) {
    state.items = [...state.items, ...activities];
    state.pagination = pagination;
  },

  [RESET_ACTIVITIES](state) {
    state.all = [];
    state.items = [];
    state.searchResults = [];
    state.pagination = {};
  },

  [FETCH_ALL_ACTIVITIES](state, activities) {
    state.all = activities;
  },

  [FETCH_SEARCH_RESULTS](state, activities) {
    state.searchResults = activities;
  },

  [ACTIVITY_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },

  [UPDATE_ACTIVITY](state, payload) {
    const index = state.all.findIndex((item) => item.id === payload.id);
    if (index !== -1) state.all.splice(index, 1, payload);
  },

  [SET_SEARCH_TEXT](state, searchText) {
    state.searchText = searchText;
  },
};
