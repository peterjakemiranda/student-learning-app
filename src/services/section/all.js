import store from "../../store";
import { axios } from "../../boot/axios";

const success = ({ data }, resolve) => {
  store.dispatch("fetchAllSections", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default (chapter_id = null) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        chapter_id === null
          ? "/api/sections"
          : `/api/sections?chapter_id=${chapter_id}`
      )
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
