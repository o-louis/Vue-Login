<template>
  <main
    class="flex flex-col items-center w-full max-w-screen-lg m-auto mt-10 text-lg leading-relaxed text-white"
  >
    <h1 class="mb-4 text-2xl font-bold uppercase text-pink">Sign Up</h1>
    <SignUpForm @onSubmit="redirectToSignIn" />
  </main>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import router from "@/router";

import { useStore } from "vuex";

export default {
  components: { SignUpForm },
  setup() {
    const store = useStore();
    const redirectToSignIn = (user) => {
      store.dispatch("user/addUser", user);
      router.push({ name: "SignIn" });
    };

    return {
      redirectToSignIn,
    };
  },
};
</script>
