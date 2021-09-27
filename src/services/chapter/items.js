import store from "../../store";
import paginationTransformer from "../../transformers/pagination";
import helpers from "../../utils/helpers";

import { axios } from "../../boot/axios";
const success = ({ data }, options, resolve) => {
  const chapters = data;
  const pagination = paginationTransformer.fetch(data.pagination);
  store.dispatch("fetchChapters", { chapters, pagination });

  resolve({ chapters, pagination });
};

const failed = (error, reject) => reject(error);

export default (options = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get(helpers.buildUrl("/api/chapters", options))
      .then((response) => {
        success(response, options, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
