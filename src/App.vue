<template>
  <Header title="VueLogin" home="/" />
  <router-view />
</template>

<script>
import Header from "@/components/TheHeader.vue";

import { useStore } from "vuex";
import { onMounted } from "vue";

export default {
  components: { Header },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("user/checkSession"));
  },
};
</script>
