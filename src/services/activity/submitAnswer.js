import { axios } from "../../boot/axios";
const success = (resolve, { data }) => {
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (activityId, data) =>
  new Promise((resolve, reject) => {
    axios
      .request({
        url: `/api/activity/${activityId}/answer`,
        data,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        success(resolve, response);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
