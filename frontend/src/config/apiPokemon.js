const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

import axios from "axios";

export const apiPokemon = axios.create({
  baseURL: urlPokemon,
});

