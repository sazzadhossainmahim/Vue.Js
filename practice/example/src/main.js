// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// createApp(App).mount('#app')

const app = Vue.createApp({
    data() {
        return {
            product: "Boots",
            // task
            description: "a warm fuzz pair of soks",

            image: './src/assets/1.jpg',
            // image: './src/assets/2.jpg',
            // image: './src/assets/3.jpg',
            url: 'https://www.vuemastery.com/',
            inStock: true,
            inventory: 0,
            onSale: true,
            details: ['50% cotton', '30% woll', '20% polyster'],
            varients: [
                { id: 2234, color: 'green', image: './src/assets/2.jpg' },
                { id: 2234, color: 'blue', image: './src/assets/3.jpg' },
            ],
            sizes: [
                'S', 'M', 'L', 'XL'
            ],
            cart: 0,
        }

    },
    methods: {
        addToCard() {
            this.cart += 1
        },
        decrementToCard() {
            this.cart -= 1
        },
        updateImage(varientImage) {
            this.image = varientImage
        }
    },

}).mount('#app')