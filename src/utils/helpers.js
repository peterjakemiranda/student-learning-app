export default {
  buildUrl(base, queries) {
    let url = "?";
    const keys = Object.keys(queries).filter((key) => queries[key]);
    keys.forEach((key, index) => {
      url += `${key}=${queries[key]}`;
      if (index < keys.length - 1) url += "&";
    });
    return `${base}${url}`;
  },
  debounce(fn, delay) {
    var timeoutID = null;
    return function () {
      clearTimeout(timeoutID);
      var args = arguments;
      var that = this;
      timeoutID = setTimeout(function () {
        fn.apply(that, args);
      }, delay);
    };
  },
};
