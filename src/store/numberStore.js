const numberStore = {
    namespaced: true,
    state: () => ({
        number: 1
    }),
    mutations: {
        increaseNumber(state) {
            state.number = state.number + 1
        },
        decreaseNumber(state) {
            state.number = state.number - 1
        },
        incrementByAmount(state, amount) {
            state.number = state.number + Number(amount);
        }
    },
    actions: {
        increaseNumber(context) {
            context.commit('increaseNumber');
        },
        decreaseNumber(context) {
            context.commit('decreaseNumber');
        },
        incrementByAmount(context, amount) {
            context.commit('incrementByAmount', amount);
        }
    }
};

export default numberStore;