import store from "../../store";
import { axios } from "../../boot/axios";
import helpers from "../../utils/helpers";

const success = ({ data }, resolve) => {
  store.dispatch("fetchAllStudents", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default (options = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get(helpers.buildUrl("/api/students", options))
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
