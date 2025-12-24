import axios from "axios";
import "./PokedexList.css";
import { useEffect, useState } from "react";
import Pokemon from "../pokemon/pokemon.jsx";
import Pokedex from "../pokedex/pokedex.jsx";
import usePokemonList from "../hooks/usePokemonList.js";

function PokedexList() {
  let default_url = "https://pokeapi.co/api/v2/pokemon";
  
const[pokemonListState,setPokmonListState]=usePokemonList(default_url);
 

  return (
    <div className="pokemon-list-wrapper">
      <div>
        <h1>pokemon kist</h1>
      </div>
      <div className="page-controls">
        <button
          onClick={() =>
            setPokmonListState({
              ...pokemonListState,
              pokedex_url: pokemonListState.previous_url,
            })
          }
        >
          prev
        </button>
        <button
          onClick={() =>
            setPokmonListState({
              ...pokemonListState,
              pokedex_url: pokemonListState.next_url,
            })
          }
        >
          next
        </button>
      </div>
      {console.log(pokemonListState)}

      <div className="pokemon-list">
        {pokemonListState.pokemonlist.map((poke) => (
          <Pokemon
            url={poke.image}
            name={poke.name}
            key={poke.id}
            id={poke.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PokedexList;
