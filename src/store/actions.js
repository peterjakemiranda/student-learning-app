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

// Chapter
export const fetchChapters = ({ commit }, { chapters, pagination }) => {
  commit(types.FETCH_CHAPTERS, { chapters, pagination });
};

export const fetchAllChapters = ({ commit }, chapters) => {
  commit(types.FETCH_ALL_CHAPTERS, chapters);
};

export const resetChapters = ({ commit }) => {
  commit(types.RESET_CHAPTERS);
};

export const setChapterQuery = ({ commit }, { page, limit, search }) => {
  commit(types.CHAPTER_QUERY, { page, limit, search });
};

// Section
export const fetchSections = ({ commit }, { sections, pagination }) => {
  commit(types.FETCH_SECTIONS, { sections, pagination });
};

export const fetchAllSections = ({ commit }, sections) => {
  commit(types.FETCH_ALL_SECTIONS, sections);
};

export const fetchSearchResults = ({ commit }, sections) => {
  commit(types.FETCH_SEARCH_RESULTS, sections);
};

export const resetSections = ({ commit }) => {
  commit(types.RESET_SECTIONS);
};

export const setSectionQuery = ({ commit }, { page, limit, search }) => {
  commit(types.SECTION_QUERY, { page, limit, search });
};

export const updateSection = ({ commit }, payload) => {
  commit(types.UPDATE_SECTION, payload);
};

// Bookmark
export const fetchAllBookmarks = ({ commit }, bookmarks) => {
  commit(types.FETCH_ALL_BOOKMARKS, bookmarks);
};
