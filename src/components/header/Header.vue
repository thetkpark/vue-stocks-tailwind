<template>
  <div>
    <nav
      class="bg-purple-500 w-auto h-16 rounded-lg m-8 flex justify-between items-center text-white px-8"
    >
      <!-- LEFT -->
      <div class="flex">
        <!-- BRAND -->
        <div class="flex inline-block cursor-pointer p-3 mr-3">
          <i class="inline-block material-icons text-5xl font-bold">trending_up</i>
          <p class="inline-block mt-2 ml-3 text-2xl font-bold">STOCK</p>
        </div>
        <!-- BRAND -->
        <!-- LEFT CONTENT : AUTH -->
        <div v-if="auth" class="flex inline-block items-center">
          <a class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer">Home</a>
          <a class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer">Portfolio</a>
          <a class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer">Stocks</a>
        </div>
        <!-- LEFT CONTENT : AUTH -->
      </div>
      <!-- LEFT -->
      <!-- RIGHT -->
      <div class="flex inline-block items-center">
        <!-- RIGHT CONTENT : AUTH -->
        <p v-if="auth" class="py-3 px-4 mt-1 mr-1">{{ funds }}</p>
        <a
          v-if="auth"
          class="py-3 px-4 mt-1 mr-1 hover:bg-purple-700 rounded cursor-pointer"
        >End Day</a>
        <a
          v-if="auth"
          class="py-3 px-4 mt-1 mr-1 hover:bg-purple-700 rounded cursor-pointer"
        >Log Out</a>
        <!-- RIGHT CONTENT : AUTH -->
        <!-- RIGHT CONTENT : UNAUTH -->
        <a
          v-if="!auth"
          class="py-3 px-4 mt-1 mr-1 hover:bg-purple-700 rounded cursor-pointer"
        >Sign Up</a>
        <a
          v-if="!auth"
          class="py-3 px-4 mt-1 mr-1 hover:bg-purple-700 rounded cursor-pointer"
        >Sign In</a>
        <!-- RIGHT CONTENT : UNAUTH -->
        <!-- BURGER : RESPONSIVE -->
        <div class="mt-1 hover:bg-purple-700 rounded cursor-pointer md:hidden">
          <i class="p-2 material-icons">menu</i>
        </div>
        <!-- BURGER : RESPONSIVE -->
      </div>
      <!-- RIGHT -->
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funds: 1000,
      auth: false
    };
  }
};
</script>

<style></style>
