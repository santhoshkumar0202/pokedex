import axios from "axios";
import { useEffect, useState } from "react";
import downloadpokiedex from "../../util/downloadpokemon";

function usePokemon(id) {

    let [pokemon, setPokemon] = useState(null);
    let [pokemonListState, setPokmonListState] = useState({
    pokemonlist: [],
    pokedex_url: "",
    previous_url: "",
    next_url: "",
  });
    let pokedex_url = 'https://pokeapi.co/api/v2/pokemon/';
    console.log(id)

    async function download(id) {



        let respone = await axios.get(pokedex_url + id);
        let pokemon = respone.data

        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            type: pokemon.types,
            image: pokemon.sprites.other.dream_world.front_default,
        }
             
        )
                   let type=respone.data.types.map((t)=>t.type.name) 
                   return type[0]

                   

    }
    async function downloadrelated(id) {
    let type= await download(id);
    console.log(type)
   await downloadpokiedex(pokemonListState,setPokmonListState,`https://pokeapi.co/api/v2/type/${type}` )
    window.scrollTo({top:0,left:0,behavior:"smooth" })}
  

    useEffect(() => { downloadrelated(id); }, [id])
    return[pokemon,pokemonListState]
}
export default usePokemon;