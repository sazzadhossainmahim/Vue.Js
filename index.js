// Declarative Rendering
var app = new Vue({

    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

app.message = 'i have changed the message';



// --------bind element attributes like this
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})


//Conditionals and Loops
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false,
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn php' },
            { text: 'Learn vue' }
        ]
    }
})


// Handling User Input
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hellow Vue.Js!',
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

// Vue also provides the v-model directive that makes two-way binding between form input and app state a breeze
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hellow v-model'
    }
})

// Define a new component called todo-item
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

var app = new Vue()

Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})