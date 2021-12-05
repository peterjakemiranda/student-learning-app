/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */
import * as types from "./mutation-types";

// Profile
export const getAccount = ({ commit }, account) => {
  commit(types.GET_ACCOUNT, account);
};

// Auth
export const login = ({ commit }, tokenData) => {
  commit(types.LOGIN, tokenData);
};

export const logout = ({ commit }) => {
  commit(types.RESET_PROFILE);
  commit(types.LOGOUT);
};

export const checkAuthentication = ({ commit }) => {
  commit(types.CHECK_AUTHENTICATION);
};

// Course
export const setCurrentCourse = ({ commit }, course) => {
  commit(types.CURRENT_COURSE, course);
};

export const fetchCourses = ({ commit }, { courses, pagination }) => {
  commit(types.FETCH_COURSES, { courses, pagination });
};

export const fetchAllCourses = ({ commit }, courses) => {
  commit(types.FETCH_ALL_COURSES, courses);
};

export const resetCourses = ({ commit }) => {
  commit(types.RESET_COURSES);
};

export const setCourseQuery = ({ commit }, { page, limit, search }) => {
  commit(types.COURSE_QUERY, { page, limit, search });
};

// Activity
export const fetchActivities = ({ commit }, { activities, pagination }) => {
  commit(types.FETCH_ACTIVITIES, { activities, pagination });
};

export const fetchAllActivities = ({ commit }, activities) => {
  commit(types.FETCH_ALL_ACTIVITIES, activities);
};

export const fetchSearchResults = ({ commit }, activities) => {
  commit(types.FETCH_SEARCH_RESULTS, activities);
};

export const resetActivities = ({ commit }) => {
  commit(types.RESET_ACTIVITIES);
};

export const setActivityQuery = ({ commit }, { page, limit, search }) => {
  commit(types.ACTIVITY_QUERY, { page, limit, search });
};

export const updateActivity = ({ commit }, payload) => {
  commit(types.UPDATE_ACTIVITY, payload);
};

// Bookmark
export const fetchAllBookmarks = ({ commit }, bookmarks) => {
  commit(types.FETCH_ALL_BOOKMARKS, bookmarks);
};

// Student
export const setCurrentStudent = ({ commit }, student) => {
  commit(types.CURRENT_STUDENT, student);
};

export const fetchStudents = ({ commit }, { students, pagination }) => {
  commit(types.FETCH_STUDENTS, { students, pagination });
};

export const appendStudents = ({ commit }, { students, pagination }) => {
  commit(types.APPEND_STUDENTS, { students, pagination });
};

export const fetchAllStudents = ({ commit }, students) => {
  commit(types.FETCH_ALL_STUDENTS, students);
};

export const resetStudents = ({ commit }) => {
  commit(types.RESET_STUDENTS);
};

export const setStudentQuery = ({ commit }, { page, limit, search }) => {
  commit(types.STUDENT_QUERY, { page, limit, search });
};

export const removeStudent = ({ commit }, id) => {
  commit(types.REMOVE_STUDENT, id);
};

// Announcements
export const fetchAnnouncements = ({ commit }, { announcements, pagination }) => {
  commit(types.FETCH_ANNOUNCEMENTS, { announcements, pagination });
};

export const fetchAllAnnouncements = ({ commit }, announcements) => {
  commit(types.FETCH_ALL_ANNOUNCEMENTS, announcements);
};

export const resetAnnouncements = ({ commit }) => {
  commit(types.RESET_ANNOUNCEMENTS);
};

export const updateAnnouncement = ({ commit }, payload) => {
  commit(types.UPDATE_ANNOUNCEMENT, payload);
};

// Quiz
export const fetchQuizzes = ({ commit }, { quizzes, pagination }) => {
  commit(types.FETCH_QUIZZES, { quizzes, pagination });
};

export const fetchAllQuizzes = ({ commit }, quizzes) => {
  commit(types.FETCH_ALL_QUIZZES, quizzes);
};

export const quizFetchSearchResults = ({ commit }, quizzes) => {
  commit(types.QUIZ_FETCH_SEARCH_RESULTS, quizzes);
};

export const resetQuizzes = ({ commit }) => {
  commit(types.RESET_QUIZZES);
};

export const setQuizQuery = ({ commit }, { page, limit, search }) => {
  commit(types.QUIZ_QUERY, { page, limit, search });
};

export const updateQuiz = ({ commit }, payload) => {
  commit(types.UPDATE_QUIZ, payload);
};

export const fetchAllQuizQuestions = ({ commit }, payload) => {
  commit(types.FETCH_ALL_QUIZ_QUESTIONS, payload);
};