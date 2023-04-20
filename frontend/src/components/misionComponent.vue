<template>
  <section class="bg-gray-800 w-full sm:flex pt-10 pb-10 z-20 relative px-12">
    <div class="px-4 container">
      <div class="flex h-32">
        <div class="flex items-center text-center lg:text-left sm:w-3/4 px-4">
          <div class="" v-for="(p, i) in platForm" :key="i">
            <div v-if="show == i">
              <h2 class="text-3xl font-semibold md:text-4xl text-white">
                {{ p.tittle }}
              </h2>
              <p class="mt-2 text-sm md:text-base text-white">
                {{ p.details }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex px-4 gap-2 text-xl mt-32">
        <div
          class="border-b-2 w-36 border-otherblue rounded border-red-600 hover:bg-white hover:text-gray-800  text-white"
          v-for="(x, m) in platForm"
          :key="m"
          @click="desplegar(m)"
        >
          {{ x.tittle }}
        </div>
      </div>
    </div>

    <div
      class="hidden lg:block lg:w-1/2"
      style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
    >
      <div class="h-full object-cover">
        <img
          alt="..."
          class="max-w-full h-full rounded-lg shadow-lg"
          src="../assets/img/36436145_10155411934057019_7376207040655392768_n.jpg"
        />
        <div class="h-full bg-black opacity-25"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    let platForm = ref([
      {
        tittle: "Nuestro Club",
        details:
          "Lorem ipsum dolor sit amet. Aut dicta deleniti aut consequuntur maxime hic voluptatem accusamus eos optio perspiciatis? ",
      },
      {
        tittle: "Misión",
        details:
          "Lorem ipsum dolor sit amet. Aut dicta deleniti aut consequuntur maxime hic voluptatem accusamus eos optio perspiciatis?y Sed consequatur mollitia vel dolores omnis hic repellendus sint sit quasi ",
      },
      {
        tittle: "Visión",
        details:
          "Lorem ipsum dolor sit amet. Aut dicta deleniti aut consequuntur maxime hic voluptatem accusamus eos optio perspiciatis?y Sed consequatur mollitia vel dolores omnis hic repellendus sint sit quasi",
      },
    ]);

    const show = ref(0);
    function desplegar(i) {
      console.log(i);
      show.value = i;
    }

    return { desplegar, platForm, show };
  },
};
</script>