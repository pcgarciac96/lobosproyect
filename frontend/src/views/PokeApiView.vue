<template>
  <div>
    <div class="flex h-32 py-40 flex-col items-center justify-center bg-white">
      <!--  -->
      <div>
        <img
          class="h-[89px] w-[273px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="google Logo"
        />
      </div>
    </div>
    <searchFielPokemon :value="searchValue" @update:value="updateSearchValue" />

    <div v-if="pokemons.length == 0">
      nada por mostrar, digite el id del pokemon que desea encontrar
    </div>
    <div v-else class="bg-white py-10 p-5 items-center justify-center flex">
      <div class="flex p-4 ml-5 md:p-10">
        <div class="w-full flex items-center justify-center bg-transparent">
          <div
            class="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div
              class="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition"
            >
              <div
                class="rounded-full bg-black w-16 sm:w-18 md:w-20 md:mt-0 mt-1 overflow-auto"
              >
                <img :src="pokemons.data.sprites.front_default" class="" />
              </div>
            </div>
            <div class="flex flex-col space-y-2 md:space-y-4">
              <label
                class="absolute font-bold text-gray-100 text-md text-start top-1 left-8 sm:left-10"
              >
                {{ pokemons.data.forms[0].name }}
              </label>
              <button
                @click="store.insertPokemon(pokemons.data.forms[0].name)"
                class="absolute text-gray-200 text-sm mt-1 leading-relaxed left-8 sm:left-10"
              >
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <listSelected/>
  </div>
</template>
<script>
import { ref } from "vue";
import { getPokemonList } from "../services/pokemonService";
import { usePokemonStore } from "../stores/pokemonStore";
import searchFielPokemon from "../components/searchField.vue";
import listSelected from '../components/listPokemonSelected.vue'

export default {
  
  components: { searchFielPokemon,listSelected },

  setup() {
    const store = usePokemonStore();
    const searchValue = ref("");
    let pokemons = ref([]);
    const updateSearchValue = (value) => {
      getPokemonList(value)
        .then((res) => {
          pokemons.value = res;
          console.log(pokemons.value);
        })
        .catch((error) => console.log(error));
    };


    return {
      searchValue,
      updateSearchValue,
      pokemons,
      store,
    };
  },
};
</script>
