import { createStore } from 'vuex';
// import createPersistedState from "vuex-persistedstate";

export const store = createStore({
    state() {
        return {
            data: {},
            version: '1.1.0',
            initial_row_count: 6,
            initial_col_count: 5,
            expand_step: 2,
            width_unit: 120, // in px
            height_unit: 100, // in px
        }
    },
    // plugins: [createPersistedState()],
    getters: {
        getVersion: (state) => {
            return state.version
        },
        getRowIndexes(state) {
            let temp = state.data['indexes'];
            return temp.map(d => d.row);
        },
        getColIndexes(state) {
            let temp = state.data['indexes'];
            return temp.map(d => d.col);
        },
    },
    mutations: {
        setVersion(state, payload) { state.version = payload },
        addIndex(state, payload) { state.data['indexes'].push(payload) },
    },
    actions: {
        initialize({ state }) {
            let temp = [];
            for (let i = 1; i <= state.initial_row_count; i++) {
                for (let j = 1; j <= state.initial_col_count; j++) {
                    temp.push({ row: i, col: j })
                }
            }
            state.data['indexes'] = temp
        },
    },
})