<template>
  <slot />
</template>

<script>
import { provide, reactive, watch } from '@vue/runtime-core';


export default {
    
  setup() {
    // --------dependency injection
    const settings = reactive({
        theme: 'light'
    })
    provide('settings', settings)
    watch(settings, settings=>{
        console.log(
            `SettingsProvider: theme has been switched to ${settings.theme} mode`
        )
    })
  },
};
</script>

<style lang="scss" scoped>
</style>