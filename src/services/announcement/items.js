import store from "../../store";
import paginationTransformer from "../../transformers/pagination";
import helpers from "../../utils/helpers";

import { axios } from "../../boot/axios";
const success = ({ data }, options, resolve) => {
  const announcement = data;
  const pagination = paginationTransformer.fetch(data.pagination);
  store.dispatch("fetchAnnouncements", { announcement, pagination });

  resolve({ announcement, pagination });
};

const failed = (error, reject) => reject(error);

export default (options = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get(helpers.buildUrl("/api/announcements", options))
      .then((response) => {
        success(response, options, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
