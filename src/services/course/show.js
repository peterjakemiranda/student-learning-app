import { axios } from "../../boot/axios";
import notificationCount from "../notification/count";
const success = (data, resolve) => {
  notificationCount();
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`/api/courses/${id}`)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
