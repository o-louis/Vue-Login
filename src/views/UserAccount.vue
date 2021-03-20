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
    <div v-if="gif" class="self-center mt-14">
      <img :src="gif.image_original_url" :alt="gif.title" />
    </div>
  </main>
</template>

<script>
import router from "@/router";

import { computed, ref } from "vue";
import { useStore } from "vuex";

const GIPHY = {
  baseURL: "https://api.giphy.com/v1/gifs/",
  apiKey: import.meta.env.VITE_GIPHY_API_KEY,
  tag: "welcome",
  type: "random",
};

const GIPHY_URL = encodeURI(
  GIPHY.baseURL + GIPHY.type + "?api_key=" + GIPHY.apiKey + "&tag=" + GIPHY.tag
);

export default {
  setup() {
    const store = useStore();
    const gif = ref("");

    fetch(GIPHY_URL)
      .then((response) => response.json())
      .then((data) => (gif.value = data.data))
      .catch((e) => console.log(e));

    const logout = () => {
      store.dispatch("user/logout");
      router.push({ name: "Home" });
    };

    return {
      gif,
      name: computed(() => store.state.user.name),
      logout,
    };
  },
};
</script>
