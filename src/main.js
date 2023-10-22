import './assets/main.css'
import './assets/w3.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import Log from './components/Log.vue'
import axios from './axios/index'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('Log',Log)
app.mount('#app')

Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios