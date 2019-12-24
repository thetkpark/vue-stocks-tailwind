<template>
  <div>
    <small-header class="lg:hidden block"></small-header>
    <large-header class="hidden lg:block"></large-header>
  </div>
</template>

<script>
import SmallHeader from "./SmallHeader/SmallHeader.vue";
import LargeHeader from "./LargeHeader/LargeHeader.vue";
export default {
  components: {
    "small-header": SmallHeader,
    "large-header": LargeHeader
  }
};
</script>

<style>
</style>