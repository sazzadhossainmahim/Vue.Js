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

const routes = [
    { path: '/', component: login },
    { path: '/login', component: login },
    { path: '/todo', component: todo },
    { path: "*", component: PageNotFound },
    { path: '/register', component: register },
];
const router = new Router({
    routes,
    mode: 'history',
});
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})