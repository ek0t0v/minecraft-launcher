import { updateConfig } from '../commands/config';

function initialState() {
    return {
        locale: 'en',
        theme: 'classic',
        sidebarPosition: 'right',
        loadingPosition: 'top',
        gameDirectory: null,
        versions: [],
        lastVersion: null,
        isVersionsLoading: false,
        users: [],
        lastUser: null,
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        config: state => state,
        isVersionsEmpty: state => state.versions.length === 0,
        isVersionsLoading: state => state.isVersionsLoading,
        isUsersEmpty: state => state.users.length === 0,
        locale: state => state.locale,
    },
    actions: {
        init({ commit, dispatch }, config) {
            commit('init', config);
        },
        startVersionsLoading({ commit }) {
            commit('startVersionsLoading');
        },
        stopVersionsLoading({ commit }) {
            commit('stopVersionsLoading');
        },
        updateConfig({ commit }, { key, value, save }) {
            if (save || typeof save === 'undefined') {
                updateConfig(key, value);
            }

            commit('updateConfig', { key, value });
        },
        setLastVersion({ dispatch }, version) {
            console.log(version);
            dispatch('config/updateConfig', {
                key: 'lastVersion',
                value: version,
                save: version.isInstalled,
            }, { root: true });
        },
        setLastUser({ dispatch }, user) {
            dispatch('config/updateConfig', {
                key: 'lastUser',
                value: user,
            }, { root: true });
        },
        createUser({ dispatch, state }, user) {
            state.users.unshift(user);

            dispatch('config/updateConfig', {
                key: 'users',
                value: state.users,
            }, { root: true });
        },
        removeUser({ dispatch, state }, user) {
            const newUsersArray = state.users.filter(item => item !== user);

            if (state.lastUser === user) {
                dispatch('config/updateConfig', {
                    key: 'lastUser',
                    value: null,
                }, { root: true });
            }

            dispatch('config/updateConfig', {
                key: 'users',
                value: newUsersArray,
            }, { root: true });
        },
    },
    mutations: {
        init(state, payload) {
            Object.assign(state, payload.config);
        },
        updateConfig(state, { key, value}) {
            Object.assign(state, { [key]: value });
        },
        startVersionsLoading(state) {
            state.isVersionsLoading = true;
        },
        stopVersionsLoading(state) {
            state.isVersionsLoading = false;
        },
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => state[key] = s[key]);
        },
    },
}