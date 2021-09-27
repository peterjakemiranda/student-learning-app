import { FETCH_ALL_BOOKMARKS } from "../../mutation-types";

export default {
  [FETCH_ALL_BOOKMARKS](state, bookmarks) {
    state.all = bookmarks;
  },
};
