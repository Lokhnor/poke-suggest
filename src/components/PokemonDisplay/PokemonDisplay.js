import React from "react";
import css from "./PokemonDisplay.module.css";

function PokemonDisplay({ pokeName, pokeId, pokeImg }) {
  return (
    <div className={css.pokeCard}>
      <div>
        <h1>{pokeName}</h1>
        <p>ID: {pokeId}</p>
      </div>

      <img width="200px" alt="Searched Pokemon" src={pokeImg}></img>
    </div>
  );
}

export default PokemonDisplay;
