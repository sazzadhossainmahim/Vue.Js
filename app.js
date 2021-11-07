const app = Vue.createApp({
    // data , function
    // template: '<h2> I am the template </h2>'
    data() {
        return {
            url: 'http://google.com',
            showBooks: true,
            title: 'The final Empire',
            author: 'Branden Vue',
            age: 45,
            x: 0,
            y: 0,

        }
    },
    methods: {
        // changeTitle(abc) {
        //     this.title = 'words of red'
        //     this.title = abc;
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log('e', e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')