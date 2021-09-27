import store from "../../store";
import { axios } from "../../boot/axios";

const success = ({ data }, resolve) => {
  store.dispatch("fetchAllBookmarks", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default () =>
  new Promise((resolve, reject) => {
    axios
      .get("/api/bookmarks")
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
