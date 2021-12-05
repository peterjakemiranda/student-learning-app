import { createStore } from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";

// Modules
import profile from "./modules/profile";
import auth from "./modules/auth";
import course from "./modules/course";
import activity from "./modules/activity";
import bookmark from "./modules/bookmark";
import student from "./modules/student";
import announcement from "./modules/announcement";
import quiz from "./modules/quiz";

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
    course,
    activity,
    bookmark,
    student,
    announcement,
    quiz,
  },

  /**
   * If strict mode should be enabled
   */
  strict: debug,
});

export default store;
