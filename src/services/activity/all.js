import store from "../../store";
import { axios } from "../../boot/axios";
import notificationCount from "../notification/count";

const success = ({ data }, resolve) => {
  notificationCount();
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
