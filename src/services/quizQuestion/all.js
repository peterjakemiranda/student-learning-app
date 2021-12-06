import store from "../../store";
import { axios } from "../../boot/axios";

const success = ({ data }, resolve) => {
  store.dispatch("fetchAllQuizQuestions", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default (quiz_id, student_id = null) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        student_id === null
          ? `/api/quiz_questions?quiz_id=${quiz_id}`
          : `/api/quiz_questions?quiz_id=${quiz_id}&student_id=${student_id}`
      )
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
