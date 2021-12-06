import {
  FETCH_NOTIFICATIONS,
  NOTIFICATION_QUERY,
  NOTIFICATION_COUNT,
} from "../../mutation-types";

export default {
  [FETCH_NOTIFICATIONS](state, { notifications, pagination }) {
    state.items = notifications;
    state.pagination = pagination;
  },
  [NOTIFICATION_COUNT](state, count) {
    state.count = count;
  },

  [NOTIFICATION_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },
};
