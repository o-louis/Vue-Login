<template>
  <main
    class="flex flex-col items-center w-full max-w-screen-lg m-auto mt-10 text-lg leading-relaxed text-white"
  >
    <h1 class="mb-4 text-2xl font-bold uppercase text-pink">Sign In</h1>
    <SignForm
      type="signin"
      :errorMsg="errorSignIn"
      @onSubmit="redirectToAccount"
    />
  </main>
</template>

<script>
import SignForm from "@/components/SignForm.vue";
import router from "@/router";

import { ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { SignForm },
  setup() {
    const store = useStore();
    const errorSignIn = ref("");

    const redirectToAccount = (user) => {
      const foundUser = store.state.user.users?.find(
        (item) => item.email === user.email && item.password === user.password
      );

      errorSignIn.value = "";
      if (foundUser) {
        store.dispatch("user/authentication", foundUser);
        router.push({ name: "UserAccount" });
      } else {
        errorSignIn.value = "Email does not exist or password is wrong";
      }
    };

    return {
      redirectToAccount,
      errorSignIn,
    };
  },
};
</script>
