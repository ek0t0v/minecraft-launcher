import Vuex from 'vuex';
import Vue from 'vue';
import config from './config';
import loading from './loading';
import version from './version';
import user from './user';

Vue.use(Vuex);

function initialState() {
    return {};
}

export default new Vuex.Store({
    modules: {
        config,
        loading,
        version,
        user,
    },
    state: initialState,
    getters: {},
    actions: {},
    mutations: {},
})