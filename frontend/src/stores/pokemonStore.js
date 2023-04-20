import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemonStore", {
    state: () => ({
      pokemonList: [],
    }),
    actions: {
        insertPokemon(parametro) {
            this.pokemonList.push(parametro);
            console.log(this.pokemonList);
          },
    },
  });