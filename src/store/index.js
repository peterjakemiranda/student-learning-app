import { createStore } from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";

// Modules
import profile from "./modules/profile";
import auth from "./modules/auth";
import chapter from "./modules/chapter";
import section from "./modules/section";
import bookmark from "./modules/bookmark";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  /**
   * Assign the actions to the store
   */
  actions,

  /**
   * Assign the getters to the store
   */
  getters,
  /**
   * Assign the modules to the store
   */
  modules: {
    profile,
    auth,
    chapter,
    section,
    bookmark,
  },

  /**
   * If strict mode should be enabled
   */
  strict: debug,
});

export default store;
