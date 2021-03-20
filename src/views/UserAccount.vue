<template>
  <main
    class="w-full max-w-screen-lg m-auto mt-10 text-lg leading-relaxed text-white"
  >
    <h1 class="mt-10 mb-4 text-2xl font-bold">Hello {{ name }} 🤙</h1>
    <p>You are now connected ! Congrats !</p>
  </main>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {
      name: store.state.user.name,
    };
  },
};
</script>
