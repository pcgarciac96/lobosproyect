<template>

  <div class="flex items-center justify-center h-screen py-96">
  <div class="flex w-full h-screen">
    <div class="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
      <div class="flex flex-col justify-between h-screen p-4 bg-gray-800">
        <div class="text-sm">
          <div class="bg-gray-900 text-white p-5 rounded cursor-pointer">
            texto
          </div>
          <div
            class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
          >
            texto
          </div>
          <div
            class="bg-gray-700 text-blue-300 p-2 rounded mt-2 cursor-pointer"
          >
            texto
          </div>
          <div
            class="bg-gray-900 flex justify-between items-center text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
          >
            <span>texto</span>
            <span
              class="w-4 h-4 bg-blue-600 rounded-full text-white text-center font-normal text-xs"
              >5</span
            >
          </div>
          <div
            class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
          >
            texto
          </div>
          <div
            class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
          >
            texto
          </div>
          <div
            class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
          >
            texto
          </div>
        </div>

        <div
          class="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm"
        >
          <button class="rounded inline-flex items-center">
            <svg
              class="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            <span class="font-semibold">Logout</span>
          </button>
        </div>
      </div>
    </div>

    <section class="w-full p-4">
      <div class="w-full h-64 border-dashed border-4 p-4 text-md">
        {{dataUser.name}}
      </div>
    </section>
  </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { getUser } from "../../services/userService";
import store from "../../storege/index";

export default {
  setup() {
    let dataUser = ref({});
    onMounted(() => {
      getDataUser();
    });

    async function getDataUser() {
      let id = store.state.user.id;
      getUser(id)
        .then((res) => {
          dataUser.value = res.data;
        })
        .catch((error) => console.log(error));
    }

    return { getDataUser, dataUser };
  },
};
</script>
