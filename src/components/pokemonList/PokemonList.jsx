import React from "react";
import Pagination from "../pagination/Pagination";
import Pokemon from "../pokemon/Pokemon";
import Spinner from "../spinner/Spinner";
import "./pokemonList.scss";

const PokemonList = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const previousPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={previousPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div className="loader">
          <Spinner />
        </div>
      ) : (
        <div className="card-container">
          <div className="all-card">
            {pokemons.map((pokemon, index) => {
              return (
                <Pokemon
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
      <Pagination
        page={page + 1}
        totalPages={total}
        onLeftClick={previousPage}
        onRightClick={nextPage}
      />
    </div>
  );
};

export default PokemonList;
