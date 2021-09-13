import { createApp } from 'vue'
import Vuex from 'vuex'
import { store } from './store'
import App from './App.vue'

createApp(App)
    .use(Vuex)
    .use(store)
    .mount('#app')