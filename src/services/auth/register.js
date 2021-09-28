import accountService from "../account";
import store from "../../store";
import { router } from "../../router";
import { axios } from "../../boot/axios";

/**
 * When the request succeeds
 */
const success = (response, resolve) => {
  store.dispatch("login", response);
  accountService.find().then(() => {
    router.push({
      path: "/",
    });
    resolve();
  });
};

/**
 * When the request fails
 */
const failed = (error, reject) => {
  return reject(error.response);
};

export default (user) =>
  new Promise((resolve, reject) => {
    axios
      .post("api/signup", user)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
