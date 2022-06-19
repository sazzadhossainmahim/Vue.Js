import { createApp } from 'vue'
import App from './App.vue'
import './index.css'



const app = createApp({
    data() {
        return {
            msg: 'optional api',
        }
    }

})
createApp(App).mount('#app')