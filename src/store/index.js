import { createStore, createLogger } from "vuex";
import state from './state'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  actions,
  mutations
});

export default store;