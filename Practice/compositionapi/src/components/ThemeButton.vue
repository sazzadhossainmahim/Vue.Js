<template>
  <button class="bg-black"
    :class="{ 'dark-mode': settings.theme === 'dark' }"
    @click="toggleMode"
  >
    Switch to {{ oppsiteTheme }}mode
  </button>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed, inject, provide, watch } from "@vue/runtime-core";
export default {
  setup() {
    // dependency Injection
    const settings = inject("settings");
    const oppsiteTheme = computed(() =>
      settings.theme === 'dark' ? 'light' :  'dark'
    );
    const toggleMode = () => {
      settings.theme = oppsiteTheme.value;
    };

    return { settings, oppsiteTheme, toggleMode };
  },
};
</script>

<style lang="scss" scoped>
</style>