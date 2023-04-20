<template>
  <section class="relative image-background bg-cover bg-center bg-no-repeat">
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>

    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-black text-3xl font-extrabold sm:text-5xl mb-28">
          Atrevete a más

          <strong class="block font-extrabold text-red-600 text">
            Entrena con nosotros
          </strong>
        </h1>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <div
            class="block w-full rounded bg-red-600 px-12 py-3 text-md text-white shadow font-bold sm:w-auto"
            v-for="(text, i) in teamText"
            :key="i"
          >
            {{ text.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
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
  filter: brightness(0.8);
}
</style>