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

// Chapters
export const chapters = (state) => ({
  items: state.chapter.items,
  pagination: state.chapter.pagination,
});
export const allChapters = (state) => state.chapter.all;
export const chapterQuery = (state) => state.chapter.query;

// Sections
export const sections = (state) => ({
  items: state.section.items,
  pagination: state.section.pagination,
});
export const allSections = (state) => state.section.all;
export const searchResults = (state) => state.section.searchResults;
export const sectionQuery = (state) => state.section.query;

// Bookmarks
export const allBookmarks = (state) => state.bookmark.all;
