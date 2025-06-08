import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import "./pokedexDetails.css"



function PokedexDetails(){
let {id}=useParams();

    let[pokemon,setPokemon]=useState(null);
    let pokedex_url='https://pokeapi.co/api/v2/pokemon/';
    console.log(id)

async function download(){
    


    let respone=await axios.get(pokedex_url+id);
    let pokemon=respone.data

    setPokemon({
        name:pokemon.name,
        height:pokemon.height,
        weight:pokemon.weight,
        type:pokemon.types,
        image:pokemon.sprites.other.dream_world.front_default,
    }

    )


}
useEffect(()=>{download()},[])

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
    </>
)
}

export default PokedexDetails