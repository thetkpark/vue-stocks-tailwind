<template>
  <div
    class="flex flex-col border-purple-200 border-2 border-solid shadow-lg mt-12 p-10 rounded-lg w-signin"
  >
    <!-- HEADER -->
    <h1 class="text-5xl text-purple-400 font-semibold">Sign In</h1>
    <!-- HEADER -->
    <!-- EMAIL FORM -->
    <div class="relative">
      <input
        type="email"
        class="border-gray-300 border-solid border-2 rounded-lg shadow py-2 lg:pt-3 lg:pb-2 pl-16 mt-8 w-full text-md lg:text-xl"
        id="email"
        placeholder="Email"
        v-model="email"
      />
      <label
        for="email"
        class="absolute top-0 left-0 mt-5 ml-3 bg-white px-2"
        id="email-label"
      >Email</label>
      <i
        class="material-icons text-gray-300 absolute bottom-0 left-0 mb-2 ml-6 lg:mb-3 lg:ml-5 lg:text-3xl"
        id="email-icon"
      >email</i>
    </div>
    <!-- EMAIL FORM -->
    <!-- PASSWORD FORM -->
    <div class="relative">
      <input
        type="password"
        class="border-gray-300 border-solid border-2 rounded-lg shadow py-2 lg:pt-3 lg:pb-2 pl-16 mt-8 w-full text-md lg:text-xl"
        id="password"
        placeholder="Password"
        v-model="password"
      />
      <label
        for="email"
        class="absolute top-0 left-0 mt-5 ml-3 bg-white px-2"
        id="password-label"
      >Password</label>
      <i
        class="material-icons text-gray-300 absolute bottom-0 left-0 mb-2 ml-6 lg:mb-3 lg:ml-5 lg:text-3xl"
        id="password-icon"
      >lock</i>
    </div>
    <!-- PASSWORD FORM -->
    <button
      @click="signin"
      class="mt-8 text-xl font-semibold px-5 py-4 border-purple-500 rounded border-2 border-solid text-purple-700 w-40 text-center self-center hover:bg-purple-500 hover:text-white"
    >Sign In</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signin() {
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signin", formData);
      this.email = null;
      this.password = null;
    }
  }
};
</script>

<style scoped>
#email:focus ~ #email-icon,
#password:focus ~ #password-icon {
  color: rgb(146, 146, 146);
}
#email:focus ~ #email-label,
#password:focus ~ #password-label {
  background: transparent;
}

.w-signin {
  width: 28rem;
}
</style>
