<template>
  <form
    @submit.prevent="onSubmit()"
    class="w-full max-w-xs p-4 bg-white rounded-md text-darkBlue h-72"
  >
    <label for="username" class="flex flex-col"
      >Username
      <input
        type="text"
        name="username"
        placeholder="Enter your username..."
        class="py-2 pl-3 mt-1 border border-gray-200 rounded-lg"
        v-model="username"
      />
    </label>

    <label for="password" class="flex flex-col mt-6"
      >Password
      <input
        type="password"
        name="password"
        placeholder="Enter your password..."
        class="py-2 pl-3 mt-1 border border-gray-200 rounded-lg"
        v-model="password"
      />
    </label>
    <p v-if="error">Please fill all field</p>
    <button
      type="submit"
      class="w-full py-1 mt-8 text-lg font-semibold text-white uppercase rounded-md bg-pink hover:opacity-90"
    >
      Sign in
    </button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SignInForm",
  props: {
    error: Boolean,
  },
  setup(props, { emit }) {
    const username = ref("");
    const password = ref("");
    const error = ref(false);

    const onSubmit = () => {
      error.value = false;
      if (username.value && password.value) {
        emit("onSubmit", {
          username: username.value,
          password: password.value,
        });
        username.value = "";
        password.value = "";
      } else {
        error.value = true;
      }
    };
    return {
      error,
      username,
      password,
      onSubmit,
    };
  },
};
</script>
