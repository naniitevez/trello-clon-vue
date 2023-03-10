import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state: {},
  getters: {},
  actions: {},
  mutations: {},
});

export default store;