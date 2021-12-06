import { axios } from "../../boot/axios";
import notificationCount from "../notification/count";
const success = (resolve, { data }) => {
  notificationCount();
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (quizId, data) =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: `api/quizzes/${quizId}/score`,
        data,
        method: "post",
      })
      .then((response) => {
        success(resolve, response);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
