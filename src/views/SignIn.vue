<template>
  <main
    class="w-full max-w-screen-lg m-auto mt-10 text-lg leading-relaxed text-white"
  >
    <h1 class="mb-4 text-2xl font-bold uppercase text-pink">
      Sign In to get a surprise
    </h1>
    <SignInForm @onSubmit="redirectToAccount" />
  </main>
</template>

<script>
import SignInForm from "@/components/SignInForm.vue";
import router from "@/router";

import { useStore } from "vuex";

export default {
  components: { SignInForm },
  setup() {
    const store = useStore();

    const redirectToAccount = (user) => {
      store.dispatch("user/authentication", user);
      router.push({ name: "UserAccount" });
    };

    return {
      redirectToAccount,
    };
  },
};
</script>
