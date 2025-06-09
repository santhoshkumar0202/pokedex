import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import "./pokedexDetails.css"
import usePokemon from "../hooks/usePokemon";
import Pokemon from "../pokemon/pokemon";



function PokedexDetails(){
let {id}=useParams();
let [pokemon,pokemonListState]=usePokemon(id)

return(
    <>
    <h1 className="pokedex-redirect">
        <Link  className="anc" to="/">
        Pokedex
        </Link>
    </h1>{
  pokemon&&  <div className="pokedexDetails-wrapper">
    <div className="pokemondex-name">{pokemon.name}</div>

    <div>
        <img src={pokemon.image} alt="img" />
    </div>
    <div className="pokemondex-attr">
        <div> Height:{pokemon.height}</div>
        <div> Weight:{pokemon.weight}</div>
       
       
    </div>
    <div className="pokemondex-type">
         <h1>Type:</h1>{pokemon.type.map(t=> <span className="type" key={t.type.name}>{t.type.name}</span>)}
    </div>
    </div>}
    <div className="type-wrapper">
        
        <h1>similar</h1>
    
    <div className="type-image-container"> 
        {pokemonListState.pokemonlist.length>0 && 
        
        pokemonListState.pokemonlist.map((poke)=><Pokemon 
            url={poke.image}
            name={poke.name}
            key={poke.id}
            id={poke.id}
          />)
        }
        </div> </div>
    </>
)
}

export default PokedexDetails