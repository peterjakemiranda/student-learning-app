import store from "../../store";
import { axios } from "../../boot/axios";

const success = ({ data }, resolve) => {
  store.dispatch("quizFetchSearchResults", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default (search = "") =>
  new Promise((resolve, reject) => {
    axios
      .get(`/api/quizzes?search=${search}`)
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
