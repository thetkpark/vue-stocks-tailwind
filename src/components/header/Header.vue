<template>
  <div>
    <nav
      class="bg-purple-500 w-auto h-auto rounded-lg m-8 flex flex-col justify-start text-white px-8"
    >
      <input type="checkbox" id="nav-toggle" class="nav-toggle hidden" />
      <label
        for="nav-toggle"
        class="absolute top-0 right-0 mt-10 mr-16 px-4 pt-4 pb-3 rounded hover:bg-purple-700"
      >
        <i class="material-icons">menu</i>
      </label>

      <!-- BRAND -->
      <div class="flex cursor-pointer p-3 mr-3">
        <i class="inline-block material-icons text-5xl font-bold">trending_up</i>
        <p class="inline-block mt-2 ml-3 text-2xl font-bold">STOCK</p>
      </div>
      <!-- BRAND -->
      <!-- CONTENT -->
      <div class="nav-target">
        <!-- LEFT -->
        <div class="flex flex-col">
          <!-- LEFT CONTENT : AUTH -->
          <div v-if="auth" class="flex flex-col flex-start">
            <a class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer">Home</a>
            <a class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer">Portfolio</a>
            <a class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer">Stocks</a>
          </div>
          <!-- LEFT CONTENT : AUTH -->
        </div>
        <!-- LEFT -->
        <!-- DIVIDER -->
        <div>
          <hr class="mt-1 w-auto" />
        </div>
        <!-- DIVIDER -->
        <!-- RIGHT -->
        <div class="flex flex-col">
          <!-- RIGHT CONTENT : AUTH -->
          <p v-if="auth" class="py-3 px-4 m-1 mr-1">{{ funds }}</p>
          <a v-if="auth" class="py-3 px-4 m-1 hover:bg-purple-700 rounded cursor-pointer">End Day</a>
          <a v-if="auth" class="py-3 px-4 m-1 hover:bg-purple-700 rounded cursor-pointer">Log Out</a>
          <!-- RIGHT CONTENT : AUTH -->
          <!-- RIGHT CONTENT : UNAUTH -->
          <a v-if="!auth" class="py-3 px-4 m-1 hover:bg-purple-700 rounded cursor-pointer">Sign Up</a>
          <a v-if="!auth" class="py-3 px-4 m-1 hover:bg-purple-700 rounded cursor-pointer">Sign In</a>
          <!-- RIGHT CONTENT : UNAUTH -->
        </div>
        <!-- RIGHT -->
      </div>
      <!-- CONTENT -->
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funds: 1000,
      auth: true
    };
  }
};
</script>

<style scoped>
.nav-toggle:checked ~ .nav-target {
  display: block;
}
.nav-target {
  display: none;
}
</style>
