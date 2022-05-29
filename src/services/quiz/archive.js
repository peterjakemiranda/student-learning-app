import { axios } from "../../boot/axios";
import notificationCount from "../notification/count";
const success = (data,resolve) => {
  notificationCount();
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id, data) =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: `/api/quizzes/${id}/archive`,
        data,
        method: "PUT"
      })
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
