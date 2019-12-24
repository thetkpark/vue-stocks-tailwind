<template>
  <router-link
    class="py-3 px-4 m-1 hover:bg-purple-700 rounded cursor-pointer"
    tag="a"
    :to="this.ref"
  >{{link}}</router-link>
</template>

<script>
export default {
  props: ["link"],
  data() {
    return {
      ref: "/" + this.link.toLowerCase()
    };
  }
};
</script>

<style>
</style>