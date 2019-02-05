import { createUser, removeUser } from '../commands/user';

function initialState() {
    return {
        items: [],
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        items: state => state.items,
        isUsersEmpty: state => state.items.length === 0,
    },
    actions: {
        setItems({ commit }, payload) {
            commit('setItems', payload);
        },
        createUser({ commit }, payload) {
            commit('createUser', payload);
        },
        removeUser({ commit }, payload) {
            commit('removeUser', payload);
        },
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload.items;
        },
        createUser(state, payload) {
            state.items.unshift(payload);
        },
        removeUser(state, payload) {},
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => state[key] = s[key]);
        },
    },
}