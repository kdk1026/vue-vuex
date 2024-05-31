import { createStore } from "vuex";
import numberStore from "./numberStore";

const store = createStore({
    modules: {
        number: numberStore
    }
});

export default store;