<template>
  <div id="app">
    <app-header></app-header>
    <app-lg-header></app-lg-header>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import LargeHeader from "./components/header/LargeHeader.vue";
export default {
  components: {
    "app-header": Header,
    "app-lg-header": LargeHeader
  }
};
</script>

<style>
body {
  height: 200vh;
}
</style>
