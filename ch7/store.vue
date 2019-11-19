<template>
  <div id="app">
    <p>カウント:{{count}}</p>
    <button @click="store.mutaionts.increment">countup</button>
  </div>
</template>
    

<script>
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },

  getters: {
    plane: state => state.count,

    squared: state => state.count * state.count,

    cubed: (state, getters) => state.count * getters.squared
  },

  mutations: {
    increment(state, payload) {
      state.count = state.count + payload.amount;
    }
  },

  actions: {
    incrementAction(ctx) {
      ctx.commit("increment");
    }
  }
});

// eslint-disable-next-line no-console
console.log(store.state.count);

store.commit("increment", {
  amount: 5
});

// eslint-disable-next-line no-console
console.log(store.state.count);
// eslint-disable-next-line no-console
console.log(store.getters.cubed);

// eslint-disable-next-line no-console
console.log(store.state.count);

store.dispatch("incrementAction");

// eslint-disable-next-line no-console
console.log(store.state.count);

export default {
  data() {
    return {
      count: store.plane
    };
  }
};
</script>
