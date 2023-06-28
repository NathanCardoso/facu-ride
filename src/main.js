import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import connectFirebase from './assets/js/firebase/index'

connectFirebase()
createApp(App).use(router).mount('#app')
