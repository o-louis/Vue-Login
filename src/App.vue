<template>
  <Header title="VueLogin" home="/" />
  <router-view />
</template>

<script>
import Header from "@/components/TheHeader.vue";
export default {
  components: { Header },
};
</script>
