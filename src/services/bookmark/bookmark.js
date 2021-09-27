import { axios } from "../../boot/axios";
const success = (data, resolve) => {
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id, bookmark) =>
  new Promise((resolve, reject) => {
    axios
      .post(`/api/bookmarks/${id}`, { bookmark })
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
