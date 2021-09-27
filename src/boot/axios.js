import { boot } from "quasar/wrappers";
import axios from "axios";
import authService from "../services/auth";
import store from "../store";
import { router } from "../router";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
store.dispatch("checkAuthentication");

axios.defaults.baseURL = "http://api.handbook.digital";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

const logoutErrors = [
  40102, // No token provided
  40103, // Invalid token
];

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    /**
     * If response is unauthorized and it is not a request retry from auth service.
     */
    if (
      error.response.status === 401 &&
      error.response.request.responseURL.indexOf("retry=1") === -1
    ) {
      const errorCode = error.response.data.error.code;
      /**
       * If error should log user out.
       */
      if (logoutErrors.indexOf(errorCode) >= 0) {
        authService.logout();
        return Promise.reject(error);
      }

      /**
       * If token is expired, try to refresh it and retry failed ajax.
       */
      if (errorCode === 40104) {
        if (
          router.currentRoute.value.meta.auth == true ||
          Object.keys(router.currentRoute.value.meta).length == 0
        ) {
          return authService.token.getRefreshedToken(error.response); // call auth and redirect to login
        }
        return;
      }
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("id_token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "id_token"
      )}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const api = axios.create();

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, api };
