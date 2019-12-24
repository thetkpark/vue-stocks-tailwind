<template>
  <div>
    <nav
      class="bg-purple-500 w-auto h-auto rounded-lg flex flex-col justify-start text-white px-8 relative"
    >
      <!-- RESPONSIVE BURGER -->
      <input type="checkbox" id="nav-toggle" class="nav-toggle hidden" />
      <label
        for="nav-toggle"
        class="absolute top-0 right-0 mr-2 mt-2 px-4 pt-4 pb-3 rounded hover:bg-purple-700"
      >
        <i class="material-icons">menu</i>
      </label>
      <!-- RESPONSIVE BURGER -->

      <!-- BRAND -->
      <small-brand></small-brand>
      <!-- BRAND -->

      <!-- CONTENT -->
      <div class="nav-target inline pb-2" @click="closeToggleNav">
        <!-- LEFT -->
        <div v-if="auth" class="flex flex-col flex-start">
          <collapsible-link v-for="link in upperLinks" :key="link" :link="link"></collapsible-link>
        </div>
        <!-- LEFT -->
        <!-- DIVIDER -->
        <div v-if="auth">
          <hr class="mt-1 w-auto" />
        </div>
        <!-- DIVIDER -->
        <!-- RIGHT -->
        <div class="flex flex-col">
          <!-- RIGHT CONTENT : AUTH -->
          <div class="flex flex-col" v-if="auth">
            <p class="py-3 px-4 m-1 mr-1">{{ funds | currency}}</p>
            <collapsible-button
              v-for="button in buttons"
              @logout="onLogout"
              @endday="onEndDay"
              :key="button"
              :button="button"
            ></collapsible-button>
          </div>
          <!-- RIGHT CONTENT : AUTH -->
          <!-- RIGHT CONTENT : UNAUTH -->
          <div v-if="!auth" class="flex flex-col flex-start mb-4">
            <collapsible-link v-for="link in lowerLinks" :key="link" :link="link"></collapsible-link>
          </div>
          <!-- RIGHT CONTENT : UNAUTH -->
        </div>
        <!-- RIGHT -->
      </div>
      <!-- CONTENT -->
    </nav>
  </div>
</template>

<script>
import CollapsibleLink from "./CollapsibleLink.vue";
import CollapsibleButton from "./CollapsibleButton.vue";
import SmallBrand from "./SmallBrand.vue";
export default {
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
    },
    closeToggleNav() {
      document.getElementById("nav-toggle").checked = false;
    }
  },
  mounted() {
    // MORE RESPONSIVE ON RESIZING WINDOW TO COLLAPSE NAVBAR AUTOMATIC
    window.addEventListener(
      "resize",
      function() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
          if (document.getElementById("nav-toggle").checked == true) {
            document.getElementById("nav-toggle").checked = false;
          }
        }
      },
      true
    );
  },
  components: {
    "collapsible-link": CollapsibleLink,
    "collapsible-button": CollapsibleButton,
    "small-brand": SmallBrand
  },
  data() {
    return {
      upperLinks: ["Home", "Portfolio", "Stocks"],
      lowerLinks: ["SignIn", "SignUp"],
      buttons: ["End Day", "Log Out"]
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
.router-link-exact-active {
  background-color: #6b46c1;
}

.router-link-exact-active.brand {
  background-color: #9f7aea;
}
</style>
