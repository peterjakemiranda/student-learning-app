import { axios } from "../../boot/axios";
import all from "./all";

const success = (data, resolve, courseId) => {
  all(courseId);
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id, courseId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`/api/activity/${id}`)
      .then((response) => {
        success(response.data, resolve, courseId);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
