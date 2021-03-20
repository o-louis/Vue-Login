<template>
  <main
    class="flex flex-col w-full max-w-screen-lg m-auto mt-10 text-lg leading-relaxed text-white"
  >
    <button
      class="px-4 py-2 ml-auto font-bold text-white rounded-md bg-pink hover:opacity-90"
      @click="logout()"
    >
      Log out
    </button>
    <h1 class="mt-10 mb-4 text-2xl font-bold">Hello {{ name }} 🤙</h1>
    <p>You are now connected ! Congrats !</p>
  </main>
</template>

<script>
import router from "@/router";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const logout = () => {
      store.dispatch("user/logout");
      router.push({ name: "Home" });
    };

    return {
      name: computed(() => store.state.user.name),
      logout,
    };
  },
};
</script>
