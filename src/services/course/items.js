import store from "../../store";
import paginationTransformer from "../../transformers/pagination";
import helpers from "../../utils/helpers";

import { axios } from "../../boot/axios";
const success = ({ data }, options, resolve) => {
  const courses = data;
  const pagination = paginationTransformer.fetch(data.pagination);
  store.dispatch("fetchCourses", { courses, pagination });

  resolve({ courses, pagination });
};

const failed = (error, reject) => reject(error);

export default (options = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get(helpers.buildUrl("/api/courses", options))
      .then((response) => {
        success(response, options, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
