import {
  CURRENT_USER,
  FETCH_USERS,
  APPEND_USERS,
  RESET_USERS,
  FETCH_ALL_USERS,
  USER_QUERY,
} from "../../mutation-types";

export default {
  [CURRENT_USER] (state, user) {
    state.current = user;
  },

  [FETCH_USERS](state, { users, pagination }) {
    state.items = users;
    state.pagination = pagination;
  },

  [APPEND_USERS](state, { users, pagination }) {
    state.items = [...state.items, ...users];
    state.pagination = pagination;
  },

  [RESET_USERS](state) {
    state.all = [];
    state.items = [];
    state.pagination = {};
  },

  [FETCH_ALL_USERS](state, users) {
    state.all = users;
  },

  [USER_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },
};
