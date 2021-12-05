import {
  FETCH_ANNOUNCEMENTS,
  APPEND_ANNOUNCEMENTS,
  RESET_ANNOUNCEMENTS,
  FETCH_ALL_ANNOUNCEMENTS,
  ANNOUNCEMENT_QUERY,
  UPDATE_ANNOUNCEMENT,
} from "../../mutation-types";

export default {
  [FETCH_ANNOUNCEMENTS](state, { activities, pagination }) {
    state.items = activities;
    state.pagination = pagination;
  },

  [APPEND_ANNOUNCEMENTS](state, { activities, pagination }) {
    state.items = [...state.items, ...activities];
    state.pagination = pagination;
  },

  [RESET_ANNOUNCEMENTS](state) {
    state.all = [];
    state.items = [];
    state.searchResults = [];
    state.pagination = {};
  },

  [FETCH_ALL_ANNOUNCEMENTS](state, activities) {
    state.all = activities;
  },

  [ANNOUNCEMENT_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },

  [UPDATE_ANNOUNCEMENT](state, payload) {
    const index = state.all.findIndex((item) => item.id === payload.id);
    if (index !== -1) state.all.splice(index, 1, payload);
  },
};
