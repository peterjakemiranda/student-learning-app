import {
  CURRENT_STUDENT,
  FETCH_STUDENTS,
  APPEND_STUDENTS,
  RESET_STUDENTS,
  FETCH_ALL_STUDENTS,
  STUDENT_QUERY,
  REMOVE_STUDENT,
} from "../../mutation-types";

export default {
  [CURRENT_STUDENT](state, student) {
    state.current = student;
  },

  [REMOVE_STUDENT] (state, id) {
    const index = state.items.findIndex(s => +s.id === +id);
    state.items.splice(index, 1);
  },

  [FETCH_STUDENTS](state, { students, pagination }) {
    state.items = students;
    state.pagination = pagination;
  },

  [APPEND_STUDENTS](state, { students, pagination }) {
    state.items = [...state.items, ...students];
    state.pagination = pagination;
  },

  [RESET_STUDENTS](state) {
    state.all = [];
    state.items = [];
    state.pagination = {};
  },

  [FETCH_ALL_STUDENTS](state, students) {
    state.all = students;
  },

  [STUDENT_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
  },
};
