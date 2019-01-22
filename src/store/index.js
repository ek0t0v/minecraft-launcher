import Vuex from 'vuex';
import Vue from 'vue';
import config from './config';

Vue.use(Vuex);

function initialState() {
    return {};
}

export default new Vuex.Store({
    modules: {
        config,
    },
    state: initialState,
    getters: {},
    actions: {},
    mutations: {
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => {
                state[key] = s[key]
            });
        },
    },
})