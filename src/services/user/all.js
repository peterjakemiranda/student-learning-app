import store from "../../store";
import { axios } from "../../boot/axios";

const success = ({ data }, resolve) => {
  store.dispatch("fetchAllUsers", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default (search = null) =>
  new Promise((resolve, reject) => {
    axios
      .get(search === null ? "/api/users" : `/api/users?search=${search}`)
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
