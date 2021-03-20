<template>
  <main class="w-full max-w-screen-lg m-auto text-lg text-white">
    <section class="mt-10 leading-relaxed">
      <h1 class="mb-4 text-2xl font-bold uppercase text-pink">
        What's the heck ?
      </h1>
      <p>
        VueLogin is an example of a Vue Project with
        <a href="https://vitejs.dev/" target="_blank" class="underline"
          ><strong>Vite</strong></a
        >⚡, a crazy build tool no-bundle.
      </p>
      <p>I played around with Vuex, Vue-router, Composition API.</p>
      <p>Because Vue is sooo cool ! 🔰</p>
    </section>

    <section class="mt-8 leading-relaxed mt">
      <h2 class="mb-4 text-2xl font-bold uppercase text-pink">
        What to do next ?
      </h2>
      <p>You can {{ action }} to your account.</p>
      <ul class="mt-4 text-lg font-bold">
        <li v-if="action === 'sign in'">
          <router-link to="/signin" class="hover:underline"
            >➡Sign In</router-link
          >
        </li>
        <li v-else>
          <router-link to="/account" class="hover:underline"
            >➡Your Account</router-link
          >
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Home",
  setup() {
    const store = useStore();
    return {
      action: computed(() =>
        store.state.user.isLoggedIn ? "access" : "sign in"
      ),
    };
  },
};
</script>
