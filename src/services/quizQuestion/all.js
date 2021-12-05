import store from "../../store";
import { axios } from "../../boot/axios";

const success = ({ data }, resolve) => {
  store.dispatch("fetchAllQuizQuestions", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default (quiz_id = null) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        quiz_id === null
          ? "/api/quiz_questions"
          : `/api/quiz_questions?quiz_id=${quiz_id}`
      )
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
