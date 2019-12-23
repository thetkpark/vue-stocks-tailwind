<template>
  <div id="app" class="flex flex-col items-center">
    <app-header class="my-4 w-4/5"></app-header>
    <router-view class="my-4 w-4/5"></router-view>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
export default {
  components: {
    "app-header": Header
  },
  created() {
    this.$store.dispatch("autoLogin");
  }
};
</script>

<style></style>
