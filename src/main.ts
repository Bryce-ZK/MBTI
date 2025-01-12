import { createApp } from '@vue/runtime-dom'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import { useQuizStore } from './stores/quiz'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ElementPlus)

const store = useQuizStore()
store.loadFromLocalStorage()

app.mount('#app') 