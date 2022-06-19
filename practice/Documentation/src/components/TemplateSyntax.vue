<script>
export default {
  data() {
    return {
      message: 'Hello World!'
      
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1><br>
  <p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
</template>