<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <StringConversion/>
</template>

<script>
import StringConversion from './components/StringConversion.vue'

export default {
  name: 'App',
  components: {
    StringConversion
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
