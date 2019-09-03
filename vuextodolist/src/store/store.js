import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        list: [],
        active: [],
        complete: []
    },
    getters: {
        getlist: function (state) {
            return state.list
        }, 
        getactive: function (state) {
            return state.active
        }, 
        getcomplete: function (state) {
            return state.complete
        },
    },
    mutations: {
        addlist(state, item) {
            state.list.push(item)
            state.active.push(item)
        },
        removeActive(state, index) {
             state.active.splice(index,1)
        },
        addComplete(state, item) {
            state.complete.push(item)
        },

    }
})

export default store;