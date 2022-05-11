app.component('product-display', {
    template: `                   
     <div class="ProductDisplay">
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>
</div>

<div class="flex ">
    <div :style="{backgroundColor:varient.color}" class="border-2 border-red-900 m-1 p-1 h-12 w-12 bg-blue-900 rounded-full" v-for="(varient, index) in variants" ::key="varient.id" @mouseover="updateImage(index)">
        {{varient.color}}
    </div>

    <div class="border-2 border-red-900 m-1 p-1" v-for="size in sizes" ::key="size.id">
        {{size}}
    </div>

</div>
<div>
    <!-- <button class="border-1 rounded-3xl bg-sky-600 hover:bg-sky-700 border-red-500  p-2 m-1  " v-on:click="cart +=1">Add to
        Cart</button> -->
    <button :class="{disabledButton: !inStock}" disabled="!inStock" class="border-1 rounded-3xl bg-sky-600 hover:bg-sky-700 border-red-500  p-2 m-1  " v-on:click="addToCard">Add to
        Cart</button>
    <button class="border-1 rounded-3xl bg-sky-600 hover:bg-sky-700 border-red-500  p-2 m-1  " v-on:click="decrementToCard">
        -</button>
</div>
</div>
</div>`,
    data() {
        return {
            product: "Boots",
            // task
            description: "a warm fuzz pair of soks",
            // image: './src/assets/1.jpg',
            selectedVariant: 0,
            url: 'https://www.vuemastery.com/',
            // inStock: true,
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
            brand: 'Vue Mastery'
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
        },
        updateVariant(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title() {

            return this.brand + '' + this.CP
        }
    },

})