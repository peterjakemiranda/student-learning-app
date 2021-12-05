import {
  CURRENT_COURSE,
  FETCH_COURSES,
  APPEND_COURSES,
  RESET_COURSES,
  FETCH_ALL_COURSES,
  COURSE_QUERY,
} from "../../mutation-types";

export default {
  [CURRENT_COURSE] (state, course) {
    console.log(course);
    state.current = course;
  },

  [FETCH_COURSES](state, { courses, pagination }) {
    state.items = courses;
    state.pagination = pagination;
  },

  [APPEND_COURSES](state, { courses, pagination }) {
    state.items = [...state.items, ...courses];
    state.pagination = pagination;
  },

  [RESET_COURSES](state) {
    state.all = [];
    state.items = [];
    state.pagination = {};
  },

  [FETCH_ALL_COURSES](state, courses) {
    state.all = courses;
  },

  [COURSE_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },
};
