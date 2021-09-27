import {
  GET_ACCOUNT,
  RESET_PROFILE,
} from '../../mutation-types';

export default {
  [GET_ACCOUNT](state, account) {
    state.account = account;
  },

  [RESET_PROFILE](state) {
    state.account = {};
  },
};
