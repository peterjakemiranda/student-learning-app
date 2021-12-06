import { axios } from "../../boot/axios";
const success = (data, resolve) => {
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (data) =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: `/api/account/token`,
        data,
        method: "put",
      })
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
