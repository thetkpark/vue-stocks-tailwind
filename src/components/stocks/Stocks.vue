<template>
  <div class="flex flex-wrap justify-start">
    <app-stock
      class="my-3 h-48 w-full sm:w-1/2 lg:w-1/3"
      v-for="stock in stocks"
      :key="stock._id"
      :stock="stock"
    ></app-stock>
    {{stocks}}
    <hr />
    {{stocks[0]}}
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    "app-stock": Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },
  mounted() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
</style>