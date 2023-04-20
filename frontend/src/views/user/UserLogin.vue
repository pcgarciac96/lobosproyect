<template>
  <div class="flex items-center justify-center h-screen py-96">
    <!-- Login Container -->
    <div
      class="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] w-96"
    >
      <div class="mb-8 flex justify-center">
        <img
          class="w-32"
          src="../../assets/img/55554432_355372845073908_4873990253993525248_n.png"
          alt=""
        />
      </div>
      <div class="flex flex-col text-sm rounded-md">
        <input
          v-model="email"
          class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-red-500"
          type="text"
          placeholder="Username or Email id"
        />
        <input
          v-model="password"
          class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-red-500"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        @click="userLogin()"
        class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
        type="submit"
      >
        Sign in
      </button>
      <div class="mt-5 flex justify-between text-sm text-gray-600">
        <a href="#">Forgot password?</a>
        <a @click="$router.push('/Register')">Sign up</a>
      </div>
     </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { login } from "../../services/userService";
import router from "../../router";
import { saveToken } from "../../services/userAuthService.js";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const userLogin = () => {
      const user = {
        email: email.value,
        password: password.value,
      };
      login(user)
        .then((res) => {
          saveToken(res.data.accessToken);
          router.push({ name: "Profile" });
        })
        .catch((error) => console.log(error));
    };
    return { userLogin, email, password };
  },
};
</script>