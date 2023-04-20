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
  </div>
  <searchFielPokemon :value="searchValue" @update:value="updateSearchValue"  />
</template>
<script>
import { ref } from 'vue';
import {getPokemonList} from "../services/pokemonService";
import searchFielPokemon from "../components/searchField.vue";

export default {
  components: {searchFielPokemon },

 setup() {
    const searchValue = ref('');
let pokemons = ref([]);
    const updateSearchValue = (value) => {
       getPokemonList(value)
        .then((res) => {
            pokemons.value = res;
         console.log(pokemons.value );
        })
        .catch((error) => console.log(error));
    };

    return {
      searchValue,
      updateSearchValue,
    };
  },
}
</script>
