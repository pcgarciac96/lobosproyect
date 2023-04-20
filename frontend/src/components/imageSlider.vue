<template>
  <header class="bg-center bg-cover pt-20 md:pt-32">
    <div v-for="i in [currentIndex]" :key="i" class="h-full">
      <div class="relative text-center">
        <div class="flex flex-col md:flex-row items-center justify-center">
          <img :src="currentImg" class="flex-1 h-full md:h-screen" alt="">
          <div class="text-6xl text-white font-serif absolute mt-20 md:mt-32 h-32 md:h-auto">
            <div class="ml-4 md:ml-20">
              <h1 class="hidden md:block uppercase rounded-xl">{{ currentTxt }}</h1>
            </div>
            <div class="ml-4 md:ml-20">
              <h1 class="hidden md:block uppercase rounded-xl">{{ currentTxt1 }}</h1>
            </div>
          </div>
        </div>
        <a class="prev absolute top-1/2 left-0 transform -translate-y-1/2 md:-mt-96" @click="prev" href="#">&#10094;</a>
        <a class="next absolute top-1/2 right-0 transform -translate-y-1/2 md:-mt-96" @click="next" href="#">&#10095;</a>
      </div>
    </div>
  </header>
</template>
<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ImageSlider',

  setup() {
    const images = [
      //require("../assets/slide/6.jpg"),
      require("../assets/img/55554432_355372845073908_4873990253993525248_n.png"),
      require("../assets/img/logo.png"),
    ];

    const timer = ref(null);
    const currentIndex = ref(0);
    const currentTexto = ref(0);
    const currentText = ref(0);
    const text = ref(["", "HOLA MUNDO1", "área de ", "HOLA MUNDO3"]);
    const text1 = ref(["", "HOLA MUNDO1", "Hospitalización ", "HOLA MUNDO3"]);

    const startSlide = () => {
      timer.value = setInterval(() => next(), 150000);
    };

    const next = () => {
      currentIndex.value += 1;
      currentTexto.value += 1;
      currentText.value += 1;
    };

    const prev = () => {
      currentIndex.value -= 1;
      currentTexto.value -= 1;
      currentText.value -= 1;
    };

    const currentImg = ref(images[Math.abs(currentIndex.value) % images.length]);
    const currentTxt = ref(text.value[Math.abs(currentTexto.value) % text.value.length]);
    const currentTxt1 = ref(text1.value[Math.abs(currentText.value) % text1.value.length]);

    onMounted(() => {
      startSlide();
    });

    return {
      images,
      timer,
      currentIndex,
      currentTexto,
      currentText,
      text,
      text1,
      startSlide,
      next,
      prev,
      currentImg,
      currentTxt,
      currentTxt1,
    };
  },
};
</script>

<style>
.prev,
.next {
  cursor: pointer;
  position: absolute;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 100px;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>