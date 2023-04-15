<template>
  <!-- component -->
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <!-- <img
        src="https://source.unsplash.com/random"
        alt=""
        class="w-full h-full object-cover"
      /> -->
    </div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
          Registrar Usuario
        </h1>

        <div class="mt-6">
          <div>
            <label class="block text-gray-700">Nombre</label>
            <input
              v-model="name"
              type="name"
              name=""
              id=""
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>
          <div>
            <label class="block text-gray-700">Apellido</label>
            <input
              v-model="lastname"
              type="lastname"
              name=""
              id=""
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>
          <div>
            <label class="block text-gray-700">Teléfono</label>
            <input
              v-model="phone"
              type="phone"
              name=""
              id=""
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>
          <div>
            <label class="block text-gray-700">Email</label>
            <input
              v-model="email"
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <button
            @click="registerUser()"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Registrarme
          </button>
        </div>

        <hr class="my-6 border-gray-300 w-full" />
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import { userRegister } from "../services/userService";
import router from "../router";
// import { saveToken } from "../services/userAuthService.js";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const lastname = ref("");
    const phone = ref("");
    
    const registerUser= () => {
      const user = {
        email: email.value,
        password: password.value,
        name: name.value,
        lastname : lastname.value,
        phone: phone.value

      };
      console.log(user);
      userRegister(user)
        .then((res) => {
          console.log(res);
          // saveToken(res.data.accessToken);
          router.push({ name: "Profile" });
        })
        .catch((error) => console.log(error));
      //   const response = await apiNode.login({
      //     email: email.value,
      //     password: password.value,
      //   });
      //   console.log(response);
      // //   if (response && response.status == "error") {
      // //     console.log("hpña");
      // //     if (response.type == 1) {
      // //       console.log("hpña");
      // //     } else if (response.type == 2) {
      // //       console.log("hpña");
      // //     }
      // //   }
    };
    return { registerUser, email, password,name,lastname,phone };
  },
};
</script>