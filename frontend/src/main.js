import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './storege'
import './assets/css/styles.css';
import { createPinia } from 'pinia';
const pinia = createPinia()
createApp(App).use(store).use(router,pinia).use(pinia).mount('#app')
