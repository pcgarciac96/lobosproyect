<template>
  <div class="bg-white">
    <div class="container px-6 py-8 mx-auto">
      <p class="text-xl text-center text-black">Historial seleccionados</p>

      <div class="mt-6 space-y-8 xl:mt-12">
        <div
          class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700"
        >
          <div class="flex items-center">
            <div  v-if="store.pokemonList.length == 0">No hay elementos por mostrar</div>
            <div v-else class="grid md:grid-cols-5 grid-cols-3 gap-4">
              <div 
                class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700"
                v-for="(item, i) in store.pokemonList"
                :key="i"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { usePokemonStore } from "../stores/pokemonStore";

export default {
  setup() {
    const store = usePokemonStore();

    return {
      store,
    };
  },
};
</script>