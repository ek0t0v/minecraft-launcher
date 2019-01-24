function initialState() {
    return {
        isVersionsLoading: false,
        items: [],
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        isVersionsLoading: state => state.isVersionsLoading,
        isVersionsEmpty: state => state.items.length === 0,
        items: state => state.items,
    },
    actions: {
        startLoading({ commit }) {
            commit('startLoading');
        },
        stopLoading({ commit }) {
            commit('stopLoading');
        },
        setItems({ commit }, payload) {
            commit('setItems', payload);
        },
    },
    mutations: {
        startLoading(state) {
            state.isVersionsLoading = true;
        },
        stopLoading(state) {
            state.isVersionsLoading = false;
        },
        setItems(state, payload) {
            state.items = payload.items;
        },
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => state[key] = s[key]);
        },
    },
}