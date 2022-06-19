<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import TheWelcome from "./components/TheWelcome.vue";
import TemplateSyntax from "./components/TemplateSyntax.vue";
import {ref} from 'vue'
// import main from 'vue'
// const message = ref('api')


</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <!-- <div id="app" class="border-2 border-red-400"></div> -->
    <div  class="container 
        border-2
        text-center
        divide-x-1
        place-items-center
        border-red-400
        h-fit
        divide-blue-200
        w-fit
        grid grid-cols-6
        gap-6
        m-2
        p-4
        rounded
      ">
      <div class="border-2 divide-x-1 divide-red-200">
        <!-- <h1>Creating a Vue Application</h1>
        <div><h1>The application instance</h1></div>
        <div><h1>The Root Component</h1></div>
        <div><h1>Mounting the App</h1></div>
        <div><h1>In-Dom root component template</h1></div>
        <div><h1>App Configurations</h1></div> -->
      </div>
      <div>
        <div id="app">
         <h1>hi,composition:{{ message }}</h1>
        <h2>optional:{{msg}}</h2>
<TemplateSyntax></TemplateSyntax>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
      <!-- <div class="border-2"><h1>Reactivity Fundamentals</h1></div>
      <div class="border-2"><h1>Computed Properties</h1></div>
      <div class="border-2"><h1>Class and Style Bindings</h1></div>
      <div class="border-2"><h1>Conditional Rendering</h1></div>
      <div class="border-2"><h1>List Rendering</h1></div>
      <div class="border-2"><h1>Event Rendering</h1></div>
      <div class="border-2"><h1>Form Input Bindings</h1></div>
      <div class="border-2"><h1>Lifecycle hooks</h1></div>
      <div class="border-2"><h1>Watchers</h1></div>
      <div class="border-2"><h1>Template Refs</h1></div>
      <div class="border-2"><h1>Components Basics</h1></div> -->
    </div>
    <div></div>
  </main>
</template>
<!-- 
<style>
/* @import './assets/base.css'; */

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style> -->
