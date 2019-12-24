<template>
  <a
    @click="btnClick"
    class="py-3 px-4 mt-1 mr-1 hover:bg-purple-700 rounded cursor-pointer"
  >{{button}}</a>
</template>

<script>
export default {
  props: ["button"],
  methods: {
    btnClick() {
      const btn = this.button;
      const action = btn.replace(" ", "").toLowerCase();
      this.$emit(action);
    }
  }
};
</script>

<style>
</style>