import React from "react";
import { Link } from "react-router-dom";
import "./pokemon.scss";

const Pokemon = ({ id, name, image, type }) => {
  const pokemonCardStyle = `card ${type}`;
  return (
    <div className="card-wrapper">
      <Link className="link" to={`/${name}`}>
        <div className={pokemonCardStyle}>
          <div className="card-id"># {id}</div>
          <img src={image} alt={name} className="card-image" />
          <div className="card-info">
            <h3>
              Name: <span>{name}</span>
            </h3>
            <h4>
              Type: <span>{type}</span>
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
