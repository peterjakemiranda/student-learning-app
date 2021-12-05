import { axios } from "../../boot/axios";
import all from "./all";

const success = (data, resolve) => {
  all();
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`/api/courses/${id}`)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
