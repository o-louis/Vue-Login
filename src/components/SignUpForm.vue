<template>
  <form
    @submit.prevent="onSubmit()"
    class="w-full h-auto max-w-xs p-4 bg-white rounded-md text-darkBlue"
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

    <label for="email" class="flex flex-col mt-6"
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
    <p v-if="error">Please fill all field</p>
    <p v-if="errorSignUp && !error" class="mt-6">{{ errorSignUp }}</p>
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
  name: "SignUpForm",
  props: {
    errorSignUp: String,
  },
  setup(props, { emit }) {
    const username = ref("");
    const password = ref("");
    const email = ref("");
    const error = ref(false);

    const onSubmit = () => {
      error.value = false;
      if (username.value && password.value && email.value) {
        emit("onSubmit", {
          username: username.value,
          password: password.value,
          email: email.value,
        });
      } else {
        error.value = true;
      }
    };
    return {
      error,
      username,
      password,
      email,
      onSubmit,
    };
  },
};
</script>
