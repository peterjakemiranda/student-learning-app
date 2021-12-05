import store from "../../store";
import { axios } from "../../boot/axios";

const success = ({ data }, resolve) => {
  store.dispatch("fetchAllActivities", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default (course_id = null) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        course_id === null
          ? "/api/activity"
          : `/api/activity?course_id=${course_id}`
      )
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
