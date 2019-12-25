<template>
  <div class="flex flex-wrap justify-start">
    <app-stock
      class="my-3 h-48 w-full sm:w-1/2 lg:w-1/3"
      v-for="stock in myStocks"
      :key="stock._id"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  computed: {
    myStocks() {
      return this.$store.getters.myStocks;
    }
  },
  components: {
    "app-stock": Stock
  },
  mounted() {
    console.log("PORTFOLIO MOUNTED");

    this.$store.dispatch("initMyStocks");
  }
};
</script>

<style>
</style>