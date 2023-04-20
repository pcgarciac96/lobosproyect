<template>
  <section class="pb-20 bg-gray-800 -mt-32">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div
          class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
          v-for="(link, i) in links"
          :key="i"
          :class="{ 'diferent-card': i === 1 }"
        >
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                :class="{ 'diferent-color': i === 1 }"
              >
                <img :src="link.img" alt="" />
              </div>
              <h6 class="text-xl font-semibold">{{ link.name }}</h6>
              <p class="mt-2 mb-4 text-gray-600">
                Lorem ipsum dolor sit amet. Quo quidem laboriosam qui officia
                rerum aut veniam tempora ea alias quos ut molestiae explicabo
                sit voluptas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    let links = [
      { name: "text 1", img: require("../assets/img/icons/rugby.png") },
      { name: "text 2", img: require("../assets/img/icons/rugby(1).png") },
      {
        name: "text 3",
        img: require("../assets/img/icons/jugador-de-rugby.png"),
      },
    ];

    return { links };
  },
};
</script>
<style >
.diferent-card {
  padding-top: 0px;
}
.diferent-color {
  background-color: darkred;
}
</style>