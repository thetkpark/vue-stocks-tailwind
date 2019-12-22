<template>
  <div>
    <nav
      class="bg-purple-500 w-auto h-auto rounded-lg m-8 flex justify-between items-center text-white px-8"
    >
      <!-- BRAND -->
      <router-link tag="div" to="/" class="brand flex inline-block cursor-pointer p-3 mr-3">
        <i class="inline-block material-icons text-5xl font-bold">trending_up</i>
        <p class="inline-block mt-2 ml-3 text-2xl font-bold">STOCK</p>
      </router-link>
      <!-- BRAND -->

      <!-- CONTENT -->
      <div class="flex flex-grow justify-between">
        <!-- LEFT -->
        <div class="flex">
          <!-- LEFT CONTENT : AUTH -->
          <div v-if="auth" class="flex inline-block items-center">
            <router-link
              tag="a"
              to="/"
              class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer"
            >Home</router-link>
            <router-link
              tag="a"
              to="/portfolio"
              class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer"
            >Portfolio</router-link>
            <router-link
              tag="a"
              to="/stocks"
              class="py-3 px-4 mt-1 ml-1 hover:bg-purple-700 rounded cursor-pointer"
            >Stocks</router-link>
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
          <router-link
            v-if="!auth"
            tag="a"
            to="signup"
            class="py-3 px-4 mt-1 mr-1 hover:bg-purple-700 rounded cursor-pointer"
          >Sign Up</router-link>
          <router-link
            v-if="!auth"
            tag="a"
            to="signin"
            class="py-3 px-4 mt-1 mr-1 hover:bg-purple-700 rounded cursor-pointer"
          >Sign In</router-link>

          <!-- RIGHT CONTENT : UNAUTH -->
        </div>
        <!-- RIGHT -->
        <!-- CONTENT -->
      </div>
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
.router-link-exact-active {
  background-color: #6b46c1;
}

.router-link-exact-active.brand {
  background-color: #9f7aea;
}
</style>
