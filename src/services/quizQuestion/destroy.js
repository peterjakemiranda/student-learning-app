import { axios } from "../../boot/axios";
import all from "./all";

const success = (data, resolve, quizId) => {
  all(quizId);
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id, quizId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`/api/quiz_questions/${id}`)
      .then((response) => {
        success(response.data, resolve, quizId);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
