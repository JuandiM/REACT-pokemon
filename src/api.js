export const getPokemons = async (limit = 20, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await fetch (url);
    const data = await res.json ();
    return data;
  } catch (err) {
    console.log ('Pokemons not found ' + err);
  }
};

export const getPokemonData = async url => {
  try {
    const res = await fetch (url);
    const data = await res.json ();
    return data;
  } catch (err) {
    console.log ('Failure getting pokemon data' + err);
  }
};

export const searchPokemon = async pokemon => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await fetch (url);
    const data = await res.json ();
    return data;
  } catch (err) {
    console.log ('There was an error searching pokemons ' + err);
  }
};
