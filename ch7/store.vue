import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        const: 10
    },

    getters: {
        squared: (state) => state.count * state.count,

        cubed: (state, getters) => state.count * getters.squared
    },

    mutations: {
        increment(state, payload) {
            state.count = state.count + payload.amount
        }
    }
})

console.log(store.state.count)

store.commit('increment', {
    amount: 5
})

console.log(store.state.count)

console.log(store.getters.cubed)