import {
  LOGOUT,
  CHECK_AUTHENTICATION,
  LOGIN,
  UPDATE_REFRESHING,
} from "../../mutation-types";

export default {
  [CHECK_AUTHENTICATION](state) {
    state.authenticated = !!localStorage.getItem("id_token");
  },

  [LOGIN](state, tokenData) {
    state.authenticated = true;
    localStorage.setItem("id_token", tokenData.token);
    localStorage.setItem("role", tokenData.role);
  },

  [LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem("id_token");
  },

  [UPDATE_REFRESHING](state, value) {
    state.refreshing = value;
  },
};
