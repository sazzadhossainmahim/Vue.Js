import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from "./routers";
import Vue from 'vue'
// import Buefy from 'buefy';
// import Buefy from 'buefy';
// import 'buefy/dist/buefy.css';
// import VueSweetalert2 from 'vue-sweetalert2';


import store from "./store";
import { hasOwn } from '@vue/shared';

vue.use(VueSweetalert2);
Vue.use(Buefy);

new Vue({
    router,
    store,
    render: (h) => h(App),
})
createApp(App)
    .mount('#app')