
import store from "../../store";
import { axios } from "../../boot/axios";
import helpers from '../../utils/helpers';

const success = ({ data }, options, resolve) => {
  const students = data.data;
  const pagination = data.pagination;
  if (options.page === 1) {
    store.dispatch('fetchStudents', { students, pagination });
  } else {
    store.dispatch('appendStudents', { students, pagination });
  }

  resolve({ students, pagination });
};

const failed = (error, reject) => reject(error);

export default (options = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get(helpers.buildUrl('/api/students', options))
      .then((response) => {
        success(response, options, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
