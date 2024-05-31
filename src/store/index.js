import { createStore } from "vuex";
import numberStore from "./numberStore";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    modules: {
        number: numberStore
    },
    plugins: [
        createPersistedState({
            key: 'root',
            storage: window.sessionStorage, // 생략 시, localStorage
            paths: ['number']
        })
    ]
});

export default store;