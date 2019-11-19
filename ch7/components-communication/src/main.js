import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },

  mutations: {
    increment(state) {
      state.count = state.count + 1
    }
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})