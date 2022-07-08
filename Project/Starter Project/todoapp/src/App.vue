<template>
  <div class="m-2 p-2 flex flex-row text-center">
    <h2 class="text-center">TodoApp</h2>
    <div class="m-2 p-2">
      <form
        @submit.prevent="addTodo"
        action=""
        class="text-center border-2 h-fit w-fit border-red-900 rounded-2xl"
      >
        <div class="m-2 p-2">
          <label for="">New Todo:</label>
          <input
            class="
              focus:ring focus:ring-violet-300
              m-auto
              bg-sky-900
              hover:bg-sky-900
              border-2 border-red-700
              rounded-lg
            "
            v-model="newTodo"
            type="text"
            name="newTodo"
            id="newTodo"
          />
        </div>

        <div class="m-1 p-2">
          <button
            class="
              focus:ring focus:ring-violet-300
              border-2
              bg-violet-900
              hover:bg-red-100
              rounded
            "
            type="submit"
            name="button"
          >
            ADD
          </button>
        </div>
      </form>
      <button class="border-2 rounded m-1 p-2" @click="allDone">Mark All Done</button>
      <h4>{{ newTodo }}</h4>
      <div class="m-2 p-2 rounded-xl border-2 border-green-900">
        <ul class="">
          <li class="" v-for="todo in todos" :key="todo.title">
            <input
              type="checkbox"
              class="m-2"
              name=""
              id=""
              v-model="todo.done"
            />
            <span :class="{ done: todo.done }">{{ todo.title }}</span>
            <button
              class="bg-blue-100 m-1 p-1 rounded hover:bg-red-600"
              @click="removeTodo"
            >
              Remove
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      title: "Hello",
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      console.log(this.newTodo);
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    allDone() {
      this.todos.forEach(todo=>{
        todo.done = true;
      });
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.done {
  text-decoration: line-through;
}
</style>
