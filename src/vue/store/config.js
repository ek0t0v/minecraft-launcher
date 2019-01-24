import { updateConfig } from '../commands/config';

function initialState() {
    return {
        locale: 'en',
        theme: 'classic',
        sidebarPosition: 'right',
        gameDirectory: null,
        lastVersion: null,
        lastUser: null,
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        config: state => state,
        locale: state => state.locale,
    },
    actions: {
        init({ commit, dispatch }, payload) {
            commit('init', payload);

            dispatch('version/setItems', {
                items: payload.config.installedVersions,
            }, { root: true });

            if (payload.config.lastVersion) {
                dispatch('config/setLastVersion', {
                    version: payload.config.lastVersion,
                }, { root: true });
            }

            // todo: Положить список юзеров в user store.
        },
        updateConfig({ commit }, payload) {
            if (payload.save || typeof payload.save === 'undefined') {
                updateConfig(payload.key, payload.value);
            }

            commit('updateConfig', payload);
        },
        setLastVersion({ dispatch }, payload) {
            dispatch('config/updateConfig', {
                key: 'lastVersion',
                value: payload.version,
                save: payload.version.isInstalled,
            }, { root: true });

            // todo: Не забыть помечать версию как lastVersion когда она будет установлена (с сохранением в storage).
        },
    },
    mutations: {
        init(state, payload) {
            Object.assign(state, payload.config);
        },
        updateConfig(state, payload) {
            Object.assign(state, { [payload.key]: payload.value });
        },
        setLastVersion(state, payload) {
            state.lastVersion = payload.version;
        },
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => state[key] = s[key]);
        },
    },
}