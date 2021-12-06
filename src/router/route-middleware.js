import store from "../store";

/**
 * Perform actions before each route
 * @param  {[type]}   to   route to be accessed
 * @param  {[type]}   from route coming from
 * @param  {Function} next resolves the hook, must be called
 * @return {Function}        [description]
 */
const beforeEach = (to, from, next) => {
  /**
   * Authenticated routes.
   */
  if (to.matched.some((record) => record.meta.auth)) {
    /**
     * If user is not authenticated, redirect to home.
     */
    if (!store.state.auth.authenticated) {
      return next({
        path: "/login",
      });
    }
    const { authorize } = to.meta;
    // check if route is restricted by role
    if (authorize && !authorize.includes(localStorage.getItem("role"))) {
      // role not authorised so redirect to home page
      return next({ path: "/" });
    }

    /**
     * If user account was not fetched yet, let him pass. The behavior is justified
     * in case the user is first accessing the app through a module he has, but it is
     * not fetched yet. If after fetching the user does not have the module, a ajax
     * interceptor will remove him from route.
     */
    if (Object.keys(store.state.profile.account).length === 0) {
      return next();
    }

    /**
     * If user is unverified, and if so, if it can go through.
     */
    const { verified } = store.state.profile.account;
    if (
      !verified &&
      to.matched.some((record) => record.meta.emailVerificationRequired)
    ) {
      return next({
        path: "/",
      });
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    /**
     * If user is authenticated, redirect him to app.
     */
    if (store.state.auth.authenticated) {
      return next({
        path: "/",
      });
    }
  }

  /**
   * Let user through.
   */
  return next();
};

export default {
  beforeEach,
};
