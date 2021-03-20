<template>
  <main class="w-full max-w-screen-lg m-auto text-lg text-white">
    <section class="mt-10 leading-relaxed">
      <h1 class="mb-4 text-2xl font-bold uppercase text-pink">
        What's the heck ?
      </h1>
      <p>
        VueLogin is an example of a Vue Project with
        <a href="https://vitejs.dev/" class="underline"><strong>Vite</strong></a
        >⚡, a crazy build tool no-bundle.
      </p>
      <p>I played around with Vuex, Vue-router, Composition API.</p>
      <p>Because Vue is sooo cool ! 🔰</p>
    </section>

    <section class="mt-8 leading-relaxed mt">
      <h2 class="mb-4 text-2xl font-bold uppercase text-pink">
        What to do next ?
      </h2>
      <p>
        You have two posibilities either you access to your account or you sign
        in.
      </p>
      <p class="text-sm italic">A Surprise wait for you if you sign in.</p>
      <ul class="mt-4 text-lg font-bold">
        <li>
          <router-link to="/account" class="hover:underline"
            >➡Your Account</router-link
          >
        </li>
        <li>
          <router-link to="/signin" class="hover:underline"
            >➡Sign In</router-link
          >
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {};
</script>
