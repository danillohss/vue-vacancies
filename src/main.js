import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import Maska from 'maska'

const app = createApp(App)
app.use(Maska)
const emitter = mitt()
app.config.globalProperties.emitter = emitter;
app.mount('#app');