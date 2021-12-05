import {
  FETCH_QUIZZES,
  APPEND_QUIZZES,
  RESET_QUIZZES,
  FETCH_ALL_QUIZZES,
  QUIZ_QUERY,
  UPDATE_QUIZ,
  QUIZ_FETCH_SEARCH_RESULTS,
  QUIZ_SET_SEARCH_TEXT,
  FETCH_ALL_QUIZ_QUESTIONS,
} from "../../mutation-types";

export default {
  [FETCH_QUIZZES](state, { quizzes, pagination }) {
    state.items = quizzes;
    state.pagination = pagination;
  },

  [APPEND_QUIZZES](state, { quizzes, pagination }) {
    state.items = [...state.items, ...quizzes];
    state.pagination = pagination;
  },

  [RESET_QUIZZES](state) {
    state.all = [];
    state.items = [];
    state.searchResults = [];
    state.pagination = {};
  },

  [FETCH_ALL_QUIZZES](state, quizzes) {
    state.all = quizzes;
  },

  [QUIZ_FETCH_SEARCH_RESULTS](state, quizzes) {
    state.searchResults = quizzes;
  },

  [QUIZ_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },

  [UPDATE_QUIZ](state, payload) {
    const index = state.all.findIndex((item) => item.id === payload.id);
    if (index !== -1) state.all.splice(index, 1, payload);
  },

  [QUIZ_SET_SEARCH_TEXT](state, searchText) {
    state.searchText = searchText;
  },

  [FETCH_ALL_QUIZ_QUESTIONS](state, questions) {
    state.questions = questions;
  },
};
