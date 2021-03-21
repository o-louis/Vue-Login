<template>
  <form
    @submit.prevent="onSubmit()"
    class="w-full h-auto max-w-xs p-4 bg-white rounded-md text-darkBlue"
  >
    <label for="email" class="flex flex-col"
      >Email
      <input
        type="text"
        name="email"
        placeholder="Enter your email..."
        class="py-2 pl-3 mt-1 border border-gray-200 rounded-lg"
        v-model="email"
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
    <p v-if="error" class="mt-6">Please fill all fields</p>
    <p v-if="errorSignIn && !error" class="mt-6">{{ errorSignIn }}</p>
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
    errorSignIn: String,
  },
  setup(props, { emit }) {
    const email = ref("");
    const password = ref("");
    const error = ref(false);

    const onSubmit = () => {
      error.value = false;
      if (email.value && password.value) {
        emit("onSubmit", {
          email: email.value,
          password: password.value,
        });
      } else {
        error.value = true;
      }
    };
    return {
      error,
      email,
      password,
      onSubmit,
    };
  },
};
</script>
