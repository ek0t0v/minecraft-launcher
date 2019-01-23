function initialState() {
    return {
        isActive: true,
        steps: [
            'Инициализация лаунчера...',
            'Чтение конфига...',
            'Проверка наличия джавы...',
            'Чтение списка серверов...',
            '...',
            'Готово!',
        ],
        currentStep: 0,
    };
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        isActive: state => state.isActive,
        step: state => state.steps[state.currentStep],
    },
    actions: {
        start({ commit }) {
            commit('start');
        },
        stop({ commit }) {
            commit('stop');
        },
        nextStep({ commit, state }) {
            if (state.steps.length === state.currentStep + 1) {
                commit('stop');

                return;
            }

            commit('nextStep');
        },
    },
    mutations: {
        start(state) {
            state.isActive = true;
        },
        stop(state) {
            state.isActive = false;
        },
        nextStep(state) {
            state.currentStep = state.currentStep + 1;
        },
        reset(state) {
            const s = initialState();

            Object.keys(s).forEach(key => {
                state[key] = s[key]
            });
        },
    },
}