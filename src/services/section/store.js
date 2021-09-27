import { axios } from "../../boot/axios";
const success = (resolve, { data }) => {
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (data) =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: "/api/sections",
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
