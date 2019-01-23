import Vuex from 'vuex';
import Vue from 'vue';
import config from './config';
import loading from './loading';

Vue.use(Vuex);

function initialState() {
    return {};
}

export default new Vuex.Store({
    modules: {
        config,
        loading,
    },
    state: initialState,
    getters: {},
    actions: {},
    mutations: {},
})