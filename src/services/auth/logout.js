import store from "../../store";
import { router } from "../../router";

export default () => {
  store.dispatch("logout");
  router.push("/login");
};
