<template>
<div class="fixed w-full z-50 ">
   <div
    class=" bg-transparent text-gray-100 py-3.5 md:px-36 px-12 shadow md:flex justify-between items-center"  :class="{ 'bg-white': isScrolled }"
      
  >
    <div class="flex items-center cursor-pointer">
      <div class="mr-1">
        <img
          src="../assets/img/55554432_355372845073908_4873990253993525248_n.png"
          class="h-12 md:h-16 w-18"
          alt=""
        />
      </div>
    </div>
    <span @click="menuOpen()" class="absolute md:hidden right-6 top-5 cursor-pointer text-2xl text-black z-50">
    <i :class="[isOpen ? 'bi bi-x' : 'bi bi-filter-left']" ></i>
    </span>
    <ul
      class="md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-white md:bg-transparent md:w-auto w-full top-14 duration-700 aese-in"
      :class="[isOpen ? 'left-0': 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-6" v-for="(link, i) in links" :key="i">
        <router-link :to="link.link" class="hover:text-red-800 text-black  text-md">{{
          link.name
        }}</router-link>
      </li>
      <router-link
        class="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
        to="/login"
      >
        Iniciar Sesión
      </router-link>
    </ul>
  </div>
</div>
 
</template>
<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const isScrolled = ref(false);
    let isOpen = ref(false);
    let links = [
      { name: "Inicio", link: "/home" },
      { name: "PokeApi", link: "/pokeApi" }
    ];

    const menuOpen = () => {
      isOpen.value = !isOpen.value;
    };

    const handleScroll = () => {
      console.log(isScrolled.value);
      isScrolled.value = window.scrollY > 0;
        console.log(isScrolled.value);
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    // onUnmounted(() => {
    //   window.removeEventListener("scroll", handleScroll);
    // });

    return { links, isOpen, menuOpen, isScrolled };
  },
};
</script>
<style >
  .new-color-navbar {
  /* background: white !important; */
  margin-top: 10px;
  /* border: 2px blue; */

}
 .new-color-navbard {
  background-color: black;
}
</style>