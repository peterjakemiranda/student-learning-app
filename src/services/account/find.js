import store from "../../store";
import { axios } from "../../boot/axios";

// When the request succeeds
const success = (data, resolve) => {
  store.dispatch("getAccount", data);
  resolve(data);
};

// When the request fails
const failed = (error, reject) => {
  reject(error);
};

export default () =>
  new Promise((resolve, reject) => {
    axios
      .get("api/account")
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
