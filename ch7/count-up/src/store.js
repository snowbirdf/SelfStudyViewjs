import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
            resolve({
                amount
            });
        }, 1000);
    });
}


const counter = {
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
            // eslint-disable-next-line no-console
            console.log(payload);
            state.count += payload.amount;
        },

        //anti patern
        incrementAsync(state) {
            // eslint-disable-next-line no-console
            console.log('incrementAsync');
            setTimeout(() => {
                state.count += 1
            }, 1000)
        }
    },

    actions: {
        incrementAction({
            commit
        }, payload) {
            return getCountNum(payload.type).then(data => {
                // eslint-disable-next-line no-console
                console.log(data);
                commit("increment", {
                    amount: data.amount
                });
            });
        }
    }
};

const store = new Vuex.Store({
    modules: {
        example: {
            namespaced: true,

            state: {
                value: 'Example'
            },

            getters: {
                upper: state => {
                    return state.value.toUpperCase()
                }
            },

            mutations: {
                update(state) {
                    state.value = 'Updated'
                }
            },

            actions: {
                update(ctx) {
                    ctx.commit('update')
                }
            }
        },
        counter
    }
})
export default store