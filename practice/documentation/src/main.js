import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp({
    data() {
        return {
            message: 0
        }
    }
})

app.mount('#app')