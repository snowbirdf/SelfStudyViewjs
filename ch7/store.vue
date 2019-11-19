<template>
  <div id="app">
    <p>カウント:{{count}}</p>
    <!--<button @click="store.mutations.increment">countup</button>-->
  </div>
</template>
    

<script>
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function getCountNum(type) {
  return new Promise(resolve => {
    setTimeout(() => {
      let amount;
      switch (type) {
        case "one":
          amount = 1;
          break;
        case "two":
          amount = 2;
          break;
        case "ten":
          amount = 10;
          break;
        default:
          amount = 0;
      }
      resolve({ amount });
    }, 1000);
  });
}

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
      state.count += payload.amount;
    }
  },

  actions: {
    incrementAsync({ commit }, payload) {
      return getCountNum(payload.type).then(data => {
        // eslint-disable-next-line no-console
        console.log(data);
        commit("increment", {
          amount: data.amount
        });
      });
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

store.dispatch("incrementAsync", { type: "one" }).then(() => {
  // eslint-disable-next-line no-console
  console.log(store.state.count);
});

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
