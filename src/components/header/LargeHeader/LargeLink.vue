<template>
  <router-link
    tag="a"
    :to="this.ref"
    class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer"
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