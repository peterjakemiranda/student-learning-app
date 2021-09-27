import store from "../../store";
import * as types from "../../store/mutation-types";
import logout from "./logout";
import { axios } from "../../boot/axios";

// Custom evento to be fired when token is successfully refreshed
const onRefreshSuccessEvent = document.createEvent("Event");
onRefreshSuccessEvent.initEvent("onRefreshSuccess", true, true);

/**
 * Retries ajax calls that are not responsible for refreshing token
 *
 * @param  {Object} request    The request to be tried
 * @return {Object}            Returns the resolved ajax request
 */
const retriesAjaxWhenTokenIsRefreshed = (request) => {
  if (request.config.params !== undefined) {
    request.config.params.retry = 1;
  } else {
    request.config.params = { retry: 1 };
  }
  return new Promise((resolve, reject) => {
    const resend = (e) => {
      document.removeEventListener(e.type, resend, false);
      axios
        .request(request.config)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    };
    document.addEventListener("onRefreshSuccess", resend);
  });
};

/**
 * This method will be called after a token refresh is successfull, setting
 * auth.refreshing state to false, setting the new token and resending
 * the previously failed request
 *
 * @param  {Object} response The response object from the token refresh request
 * @param  {Object} request  The previously failed request that will be resent
 * @return {Object}          The response from the resent request
 */
const onRefreshSuccess = (response, request) => {
  document.dispatchEvent(onRefreshSuccessEvent);
  localStorage.setItem("id_token", response.data.token);
  store.dispatch("checkAuthentication");
  store.commit(types.UPDATE_REFRESHING, false);
  return axios.request(request.config);
};

/**
 * This method will be called after a token refresh fails, setting auth.refreshing
 * to false and loging out
 *
 * @param  {Object} error The response error
 * @return {Object}       The response error
 */
const onRefreshError = (error) => {
  store.commit(types.UPDATE_REFRESHING, false);
  if (error.response.data.error.code === 40105) {
    return logout();
  }
  return Promise.reject(error);
};

/**
 * This method will be called after a request fails due to expired token.
 * It makes a request to refresh the token, and, after it is done,
 * it resends the previous failed request
 *
 * @param  {Object} request Response from the failed request
 * @return {Object}         Returns the response to the resent request
 */
const getRefreshedToken = (request) => {
  if (store.state.auth.refreshing) {
    return retriesAjaxWhenTokenIsRefreshed(request);
  }

  store.commit(types.UPDATE_REFRESHING, true);

  return axios
    .get("api/refresh")
    .then((response) => onRefreshSuccess(response, request))
    .catch(onRefreshError);
};

export default {
  getRefreshedToken,
};
