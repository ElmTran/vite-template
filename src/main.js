import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SvgIcon from '@/components/SvgIcon/index.vue' // svg component

import '@/assets/main.css'
import 'element-plus/dist/index.css'
import '@/assets/iconfont/index.js'
import '@/assets/iconfont/font.css'

const app = createApp(App)
app.component('SvgIcon', SvgIcon) // register globally

app.use(createPinia())
app.use(router)

app.mount('#app')
