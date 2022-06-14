import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// app.mount('#app')
const app = createApp({
    data() {
        return {
            count: 0
        }
    }
})
createApp(App).mount('#app')

const app1 = createApp({
    /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
    /* ... */
})
app2.mount('#container-2')