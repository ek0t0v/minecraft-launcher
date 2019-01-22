import { updateConfig } from '../modules/config';

function initialState() {
    return {
        locale: 'en',
        theme: 'classic',
        sidebarPosition: 'right',
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        all: state => state,
        locale: state => state.locale,
        theme: state => state.theme,
        sidebarPosition: state => state.sidebarPosition,
    },
    actions: {
        init({ commit }, payload) {
            commit('init', payload);
        },
        updateConfig({ commit }, payload) {
            updateConfig(payload.key, payload.value);
            commit('updateConfig', payload);
        },
    },
    mutations: {
        init(state, payload) {
            state = payload;
        },
        updateConfig(state, payload) {
            Object.assign(state, { [payload.key]: payload.value });
        },
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => {
                state[key] = s[key]
            });
        },
    },
}