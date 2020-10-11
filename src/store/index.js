import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from "./category";
import record from "./record";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_EXCHANGERATE_API
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/USD`)
      return await res.json()
    }
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    info,
    category,
    record,
  },
})
