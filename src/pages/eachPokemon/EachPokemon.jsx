import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./eachPokemon.scss";

const EachPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const { pokemon_name } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
      );
      setPokemon(res.data);
    };
    getPokemon();
  }, [pokemon_name]);

  const pokemonCardStyle = `card ${pokemon?.types?.[0]?.type?.name}`;
  const pokemonTypeStyle = `${pokemon?.types?.[0]?.type?.name}`;

  return (
    <div className="each-pokemon">
      <div className="back-home">
        <Link to="/" className="link-home">
          Back to the Pokemon List
        </Link>
      </div>
      <div className={pokemonCardStyle}>
        <img
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt={pokemon?.name}
        ></img>
        <div className="pokemon-id">
          <h2>{pokemon?.name}</h2>
          <hr className={pokemonTypeStyle} />
          <h4>Type: {pokemon?.types?.[0]?.type?.name}</h4>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="pokemon-info">
              <ul>
                <li>
                  Weight: <button>{pokemon?.weight}</button>
                </li>

                <li>
                  Height: <button>{pokemon?.height}</button>
                </li>

                <li>
                  Base Experience: <button>{pokemon?.base_experience}</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="pokemon-stats">
              <h4>Stats:</h4>
              <ul>
                {pokemon?.stats?.map((p, index) => {
                  return (
                    <li key={index}>
                      {p.stat.name}
                      <div className="bar-wrap">
                        <div
                          className="points"
                          style={{ width: `${(p.base_stat * 100) / 100}%` }}
                        ></div>
                      </div>
                      {p.base_stat}%
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="back-home">
        <Link to="/" className="link-home">
          Back to the Pokemon List
        </Link>
      </div>
    </div>
  );
};

export default EachPokemon;
