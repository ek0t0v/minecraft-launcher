function initialState() {
    return {
        items: [],
    };
}

// todo: При добавлении/обновлении/удалении юзеров запускать config:init, чтобы общий конфиг обновился.

export default {
    namespaced: true,
    state: initialState,
    getters: {
        items: state => state.items,
    },
    actions: {
        setItems({ commit }, payload) {
            commit('setItems', payload);
        },
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload.items;
        },
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => state[key] = s[key]);
        },
    },
}