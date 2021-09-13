import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
    state() {
        return {
            data: {},
            version: '1.1.0',
            initial_row_count: 6,
            initial_col_count: 6,
        }
    },
    plugins: [createPersistedState()],
    getters: {
        getVersion: (state) => {
            return state.version
        },
    },
    mutations: {
        setVersion(state, payload) { state.version = payload },
    },
    actions: {
        initialize({ state }) {
            let temp = [];
            for (let i = 1; i <= state.initial_row_count; i++) {
                for (let j = 1; j <= state.initial_col_count; j++) {
                    temp.push({ index: (i - 1) * state.initial_col_count + j, row: i, col: j })
                }
            }
            state.data['indexes'] = temp
        },
    },
})