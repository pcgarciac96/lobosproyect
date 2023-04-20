<template>
  <div class="bg-gray-800 w-full sm:flex pt-10 pb-10 z-20 relative px-12">
    <div class="px-4 container">
      <div class="flex h-32">
        <div class="flex items-center text-center lg:text-left sm:w-3/4 px-4">
          <div class="" v-for="(p, i) in platForm" :key="i">
            <div v-if="show == i">
              <h2 class="text-3xl font-semibold md:text-4xl">
                {{ p.titulo }}
              </h2>
              <p class="mt-2 text-sm md:text-base ">
                {{ p.detalles }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex px-4 gap-2  text-xl mt-32">
        <div
          class="border-b-2 w-36 border-otherblue  rounded "
          v-for="(x, m) in platForm"
          :key="m"
          @click="desplegar(m)"
        >
          {{ x.titulo }}
        </div>
      </div>
    </div>

    <div
      class="hidden lg:block lg:w-1/2"
      style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
    >
      <div
        class="h-full object-cover"
    
      ><img
        alt="..."
        class="max-w-full h-full rounded-lg shadow-lg"
        src="../assets/img/36436145_10155411934057019_7376207040655392768_n.jpg"
      />
        <div class="h-full bg-black opacity-25"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    let platForm = ref([
      {
        titulo: "Nuestra Clínica",
        detalles:
          "Ofrecemos servicios médicos hospitalarios de alta calidad humana a nuestra región y estamos muy orgullosos del logro de nuestros de nuestra institucion",
      },
      {
        titulo: "Misión",
        detalles:
          "Somos una institución prestadora de servicios de salud de alta complejidad, pionera en la atención integral de la gestante y el recién nacido, con amplia experiencia en la prestación de servicios de neonatología y  pediatría en la ciudad de Montería.Contamos con talento humano competente, infraestructura amigable y capacidad técnico científica, que nos permite contribuir en la recuperación del estado de salud de los usuarios que acuden a la institución.Nuestro modelo de atención se fundamenta en cuatro principios: Gestión del riesgo, seguridad del paciente, humanización del servicio  y mejoramiento continuo, éstos nos impulsan a trabajar para obtener la satisfacción del  usuario y su familia, y las partes interesadas.",
      },
      {
        titulo: "Visión",
        detalles:
          "En el año 2025 la Clínica Materno Infantil Casa del Niño será reconocida a nivel Nacional en la atención integral de la familia, principalmente en los servicios de gineco-obstetricia, cuidados intensivos, cirugía cardiovascular e imágenes diagnósticas, ampliando su capacidad instalada y oferta de servicios, destacándose por su innovación tecnológica, la calidez y excelencia en la prestación del servicio.",
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