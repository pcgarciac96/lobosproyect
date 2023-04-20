import { apiPokemon } from "@/config/apiPokemon";

export const getPokemonList = (id) => apiPokemon.get(id);
