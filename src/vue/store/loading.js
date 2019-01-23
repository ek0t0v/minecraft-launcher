function initialState() {
    return {
        active: true,
        step: {
            name: null,
        },
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        active: state => state.active,
        step: state => state.step,
    },
    actions: {
        start({ commit }) {
            commit('start');
        },
        stop({ commit }) {
            commit('reset');
            commit('stop');
        },
        setStep({ commit }, payload) {
            commit('setStep', payload);
        },
    },
    mutations: {
        start(state) {
            state.active = true;
        },
        stop(state) {
            state.active = false;
        },
        setStep(state, payload) {
            state.step = payload;
        },
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => state[key] = s[key]);
        },
    },
}