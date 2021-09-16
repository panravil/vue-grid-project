import { createStore } from 'vuex';
// import createPersistedState from "vuex-persistedstate";

export const store = createStore({
    state() {
        return {
            data: {},
            version: '1.1.0',
            initial_row_count: 60,
            initial_col_count: 50,
            expand_step: 2,
            width_unit: 60, // in px
            height_unit: 50, // in px
            zoom: 100, // in percent
            min_zoom: 10, // in percent
            max_zoom: 500, // in percent
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
        setShow(state, payload) {
            state.data['indexes'].filter(function(elem) {
                if ((elem.row == payload.row) && (elem.col == payload.col)) elem.show = 1;
            });
        },
        setZoom(state, payload) {
            if ((payload > state.min_zoom) && (payload < state.max_zoom))
                state.zoom = payload;
        }
    },
    actions: {
        initialize({ state }) {
            let temp = [];
            for (let i = 1; i <= state.initial_row_count; i++) {
                for (let j = 1; j <= state.initial_col_count; j++) {
                    temp.push({ row: i, col: j, show: 0 })
                }
            }
            state.data['indexes'] = temp
        },
    },
})