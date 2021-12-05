/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */

// Sidebar
export const sidebarStatus = (state) => state.sidebar.status;

// Auth
export const isAuthenticated = (state) => state.auth.authenticated;
export const twoFactorVerification = (state) =>
  state.auth.twoFactorVerification;
export const isInMaintenance = (state) => state.auth.maintenance;

// Profile
export const account = (state) => state.profile.account;

// Courses
export const courses = (state) => ({
  items: state.course.items,
  pagination: state.course.pagination,
});
export const allCourses = (state) => state.course.all;
export const courseQuery = (state) => state.course.query;
export const currentCourse = (state) => state.course.current;

// Activities
export const activities = (state) => ({
  items: state.activity.items,
  pagination: state.activity.pagination,
});
export const allActivities = (state) => state.activity.all;
export const searchResults = (state) => state.activity.searchResults;
export const activityQuery = (state) => state.activity.query;

// Bookmarks
export const allBookmarks = (state) => state.bookmark.all;

// Students
export const students = (state) => ({
  items: state.student.items,
  pagination: state.student.pagination,
});
export const allStudents = (state) => state.student.all;
export const studentQuery = (state) => state.student.query;
export const currentStudent = (state) => state.student.current;

export const isTeacher = () => localStorage.getItem("role") === "teacher";
export const isStudent = () => localStorage.getItem("role") === "student";

// Announcements
export const announcements = (state) => ({
  items: state.announcement.items,
  pagination: state.announcement.pagination,
});
export const allAnnouncements = (state) => state.announcement.all;
export const announcementQuery = (state) => state.announcement.query;

// Quiz
export const quizzes = (state) => ({
  items: state.quiz.items,
  pagination: state. quiz.pagination,
});
export const allQuizzes = (state) => state.quiz.all;
export const quizSearchResults = (state) => state. quiz.searchResults;
export const quizQuery = (state) => state. quiz.query;
export const allQuizQuestions = (state) => state.quiz.questions;