<template>
  <div class="flex items-center justify-center h-screen py-96">
    <!-- Login Container -->
    <div
      class="flex-col  bg-white px-6 py-14 shadow-md  w-96"
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
          v-model="name"
          class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-red-500"
          type="text"
          placeholder="Nombre"
        />
          <input
          v-model="lastname"
          class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-red-500"
          type="text"
          placeholder="Apellido"
        />
          <input
          v-model="phone"
          class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-red-500"
          type="text"
          placeholder="Teléfono"
        />
          <input
          v-model="email"
          class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-red-500"
          type="text"
          placeholder="Correo"
        />
        <input
          v-model="password"
          class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-red-500"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        @click="registerUser()"
        class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
        type="submit"
      >
        Registrarse
      </button>
     </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { userRegister } from "../../services/userService";
import router from "../../router";
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
        .then(() => {
          router.push({ name: "Profile" });
        })
        .catch((error) => console.log(error));
    };
    return { registerUser, email, password,name,lastname,phone };
  },
};
</script>