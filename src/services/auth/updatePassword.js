import axios from "../../boot/axios";

const success = (response, resolve) => {
  resolve(response.data.success.message);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (data) =>
  new Promise((resolve, reject) => {
    axios
      .put("auth/update_password", data)
      .then((response) => {
        success(response, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
