<template>
<section
  class="relative image-background bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-black  text-3xl font-extrabold sm:text-5xl mb-28">
        Atrevete a  más

        <strong class="block font-extrabold text-red-600 text">
          Entrena con nosotros
        </strong>
      </h1>


      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <div class="block w-full rounded bg-red-600 px-12 py-3 text-md  text-white shadow  font-bold sm:w-auto"
          v-for="(text, i) in teamText"
              :key="i"
        >
          {{ text.name }}
        </div>

      </div>
    </div>
  </div>
</section>

  <!-- <div class="bg-gray-800 py-28">
    <div
      class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center"
    >
      <div class="w-full lg:w-1/2">
        <div class="lg:max-w-lg">
          <h1
            class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl mb-5"
          >
            Bienvenidos a Lobos Rugby Club
          </h1>
          <div class="grid grid-cols-3 gap-4">
            <div
              class="border-white border-2 b-g bg-white font-bold text-xl text-gray-800 rounded-bt-12 border-x-2"
              v-for="(text, i) in teamText"
              :key="i"
            >
              {{ text.name }}
            </div>
          </div>
        </div>

        <div
          class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40"
        ></div>
      </div>

      <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
          alt="glasses photo"
        />
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  setup() {
    let teamText = [
      { name: "Mi Equipo" },
      { name: "Mi Familia" },
      { name: "Mi Vida" },
    ];

    return { teamText };
  },
};
</script>
<style >
  .image-background {
  background-image: url("../assets/img/29365904_10215556993095724_5605544452509781016_n.jpg");
      filter: brightness(0.80);
}
</style>