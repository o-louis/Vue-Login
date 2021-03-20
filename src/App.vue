<template>
  <Header title="VueLogin" home="/" />
  <router-view />
</template>

<script>
import Header from "@/components/TheHeader.vue";
import store from "@/store";

import { onMounted } from "vue";

export default {
  components: { Header },
  setup() {
    onMounted(() => store.dispatch("user/checkSession"));
  },
};
</script>
