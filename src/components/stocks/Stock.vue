<template>
  <div class="flex flex-col p-3">
    <div class="w-full h-full border-purple-600 border-solid border-2 rounded-t-lg pt-3 px-3">
      <div class="flex justify-between items-baseline">
        <h1 class="text-xl mt-2">{{ stock.name }}</h1>
        <h1 class="text-sm">{{stock.price}}</h1>
      </div>
      <input
        type="number"
        class="border-2 border-solid border-gray-200 shadow w-full mt-3"
        v-model="quantity"
      />
    </div>
    <button
      @click="onBuy"
      :disabled="Number(this.quantity) <= 0 || !Number.isInteger(Number(this.quantity)) || this.funds < (Number(this.quantity)*stock.price)"
      class="w-full h-16 bg-purple-600 hover:bg-white hover:text-purple-600 border-2 border-solid border-purple-600 border-t-0 rounded-b-lg pb-2 text-white text-2xl"
    >Buy</button>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: null
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    onBuy() {
      console.log("BUY SUCCESS");
      const order = {
        id: this.stock._id,
        quantity: Number(this.quantity)
      };
      console.log(order);

      this.$store.dispatch("buyStock", order);
      this.quantity = null;
    }
  }
};
</script>

<style scoped>
button:disabled {
  background-color: #805ad5;
  color: white;
  cursor: not-allowed;
}
</style>