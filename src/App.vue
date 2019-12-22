<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
export default {
  components: {
    "app-header": Header
  }
};
</script>

<style>
body {
  height: 200vh;
}
</style>
