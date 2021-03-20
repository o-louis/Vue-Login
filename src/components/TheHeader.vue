<template>
  <header
    class="w-full max-w-screen-lg py-5 m-auto text-3xl font-bold text-white"
  >
    <router-link :to="home">{{ title }}</router-link>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    home: String,
  },
};
</script>
