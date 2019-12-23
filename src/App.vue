<template>
  <div id="app" class="flex flex-col items-center">
    <app-header class="my-4 w-4/5"></app-header>
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

<style></style>
