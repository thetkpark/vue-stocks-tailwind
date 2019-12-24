<template>
  <div>
    <nav
      class="bg-purple-500 w-auto h-auto rounded-lg flex justify-between items-center text-white px-8"
    >
      <large-brand></large-brand>

      <!-- CONTENT -->
      <div class="flex flex-grow justify-between">
        <!-- LEFT -->
        <div v-if="auth" class="flex inline-block items-center">
          <large-link v-for="link in leftLinks" :key="link" :link="link"></large-link>
        </div>
        <!-- LEFT CONTENT : AUTH -->
      </div>
      <!-- LEFT -->

      <!-- RIGHT -->
      <div class="flex inline-block items-center">
        <!-- RIGHT CONTENT : AUTH -->
        <div v-if="auth">
          <p class="py-3 px-4 mt-1 mr-1 inline-block">{{ funds | currency }}</p>
          <large-button
            v-for="button in buttons"
            :key="button"
            :button="button"
            @logout="onLogout"
            @endday="onEndDay"
          ></large-button>
        </div>
        <!-- RIGHT CONTENT : AUTH -->
        <!-- RIGHT CONTENT : UNAUTH -->
        <div v-if="!auth">
          <large-link v-for="link in rightLinks" :key="link" :link="link"></large-link>
        </div>

        <!-- RIGHT CONTENT : UNAUTH -->
      </div>
      <!-- RIGHT -->
      <!-- CONTENT -->
    </nav>
  </div>
</template>

<script>
import LargeBrand from "./LargeBrand.vue";
import LargeLink from "./LargeLink.vue";
import LargeButton from "./LargeButton.vue";
export default {
  data() {
    return {
      leftLinks: ["Home", "Portfolio", "Stocks"],
      rightLinks: ["SignIn", "SignUp"],
      buttons: ["End Day", "Log Out"]
    };
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    },
    onEndDay() {
      this.$store.dispatch("rndStock");
    }
  },
  components: {
    "large-brand": LargeBrand,
    "large-link": LargeLink,
    "large-button": LargeButton
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
