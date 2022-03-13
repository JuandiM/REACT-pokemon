import React, { useState, useEffect } from "react";
import Search from "../../components/search/Search";
import PokemonList from "../../components/pokemonList/PokemonList";
import { getPokemonData, getPokemons, searchPokemon } from "../../api";
import "./home.scss";
let imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
let imgNotFound =
  "https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <div>
      <div className="head-info">
        <img src={imgUrl} alt="pokeapi-logo" className="logo" />
        <ul>
          <li>1. Find your favourite Pokemon using the search bar</li>
          <li>2. Check the list with all Pokemons</li>
          <li>3. Click on your favourite Pokemon and check the stats</li>
        </ul>
      </div>
      <div>
        <Search onSearch={onSearch} />
        {notFound ? (
          <div className="not-found">
            <img src={imgNotFound} alt="not-found"></img>
            <h2>Pokemon not found</h2>
          </div>
        ) : (
          <PokemonList
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
