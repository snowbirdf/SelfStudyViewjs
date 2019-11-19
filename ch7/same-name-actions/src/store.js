import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        foo: {
            state: {
                value: 123
            },

            actions: {
                log(ctx) {
                    // eslint-disable-next-line no-console
                    console.log('モジュールfooのステート', ctx.state)
                }
            },
        },

        bar: {
            state: {
                message: 'Hello!'
            },

            actions: {
                log(ctx) {
                    // eslint-disable-next-line no-console
                    console.log('モジュールbarのステート', ctx.state)
                }
            }
        }

    }
})

export default store