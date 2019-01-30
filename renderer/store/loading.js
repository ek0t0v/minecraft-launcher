function initialState() {
    return {
        isActive: false,
        step: null,
        progress: 0,
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        isActive: state => state.isActive,
        step: state => state.step,
        progress: state => state.progress,
    },
    actions: {
        start({ commit }) {
            commit('start');
        },
        stop({ commit }) {
            commit('stop');

            // Таймаут нужен потому что прогресс-бар появляется/исчезает с
            // анимацией. Пользователь не должен видеть сброс значений.
            setTimeout(() => commit('reset'), 150);
        },
        setStep({ commit }, payload) {
            commit('setStep', payload);
        },
    },
    mutations: {
        start(state) {
            state.isActive = true;
        },
        stop(state) {
            state.isActive = false;
        },
        setStep(state, payload) {
            state.step = payload.step;
            state.progress = payload.progress;
        },
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => state[key] = s[key]);
        },
    },
}