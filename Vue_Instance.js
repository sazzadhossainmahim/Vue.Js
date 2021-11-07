//Create a new Vue instance
// vm = short for view model to refer view instance
// all Vue components are also Vue instances

var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
        el: '#app',
        data: obj
    })
    //
var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function(newValue, oldValue) {
    // This callback will be called when `vm.a` changes
})

//----------Instance Lifecycle Hooks
// Lifecycle Diagram
// Template Syntax