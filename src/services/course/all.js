import store from "../../store";
import { axios } from "../../boot/axios";
import notificationCount from "../notification/count";

const success = ({ data }, resolve) => {
  notificationCount();
  store.dispatch("fetchAllCourses", data);
  resolve(data);
};

const failed = (error, reject) => reject(error);

export default (search = null) =>
  new Promise((resolve, reject) => {
    axios
      .get(search === null ? "/api/courses" : `/api/courses?search=${search}`)
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
