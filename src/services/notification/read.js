import { axios } from "../../boot/axios";
import count from "./count";
import items from './items';
const success = (resolve, data) => {
  items();
  count();
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id) =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: `/api/notifications/${id}/read`,
        method: "post",
      })
      .then((response) => {
        success(resolve, response);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
