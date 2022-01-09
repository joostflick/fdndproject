<template>
  <div id="app">
    <router-link to="/home">FDND repos</router-link>
    <router-link to="/sprint/2">Sprint 2</router-link>
    <router-link to="/sprint/1">Sprint 1</router-link>
    <router-view :key="$route.fullPath"></router-view>
<!--    <HelloWorld msg="De FDND repos"/>-->
  </div>
</template>

<script>
export default {
  name: 'App'
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
body {
  background-color: #050840;
}
</style>
