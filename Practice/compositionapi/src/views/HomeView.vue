<template>
  <div id="home" class="m-1">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button class="" @click="increment">Counter</button>
    <div class="border border-black m-2">{{ counter }}</div>
    <div class="border-2 border-black m-2 h-fit w-fit">{{ arrayOfEmojis }}</div>

    <div id="dependencyInjectioin" class="border border-black"></div>
    <SettingsProvider>
      <ThemeButton />
    </SettingsProvider>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { computed, onMounted, provide, ref, watch } from "@vue/runtime-core";
// import SettingsProvider from "./components/SettingsProvider.vue";
// import ThemeButton from "./components/ThemeButton.vue";
// import SettingsProvider from "@/components/SettingsProvider.vue";
// import ThemeButton from "@/components/ThemeButton.vue";
import SettingsProvider from "@/components/SettingsProvider.vue";
import ThemeButton from "@/components/ThemeButton.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    SettingsProvider,
    ThemeButton,
    
  },
  props: {
    emoji: {
      type: String,
      default: "💩",
    },
  },
  setup(props, context) {
    console.log(props.emoji);
    console.log(context);

    onMounted(() => {
      console.log(`Counter component has been Mounted!`);
    });
    // reactive Variables, wrapper object
    const counter = ref(0);
    const increment = () => counter.value++;

    // Watch Function
    watch(counter, (current) => {
      if (current === 5) console.log("you have click five times!");
    });
    const arrayOfEmojis = computed(() =>
      Array.from(new Array(counter.value), () => props.emoji).join("")
    );

    return {
      counter,
      increment,
      arrayOfEmojis,
    };
  },
};
</script>
