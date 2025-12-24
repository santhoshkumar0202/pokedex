import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import downloadpokiedex from "../../util/downloadpokemon";

function usePokemon(pokemonName) {
    
    let { id } = useParams();

    let [pokemon, setPokemon] = useState(null);
    let [pokemonListState, setPokmonListState] = useState({
        pokemonlist: [],
        pokedex_url: "",
        previous_url: "",
        next_url: "",
    });
    let pokedex_url = 'https://pokeapi.co/api/v2/pokemon/';
    console.log(id)
    console.log(pokemonName)
    console.log(pokedex_url + (pokemonName) ? pokemonName : id)

    /*for dowloading the pokemon */
    async function download() {

        // console.log(pokedex_url + (pokemonname)?pokemonname:id)

        let respone = await axios.get(pokedex_url + (pokemonName ? pokemonName : id));
        let pokemon = respone.data

        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            type: pokemon.types,
            image: pokemon.sprites.other.dream_world.front_default,
        }

        )
        let type = respone.data.types.map((t) => t.type.name)
        return type[0]



        
    }
    /*wrapping up couple of dowlaod functions  */
    async function downloadrelated(id) {
try{ let type = await download(id);
        console.log(type)
        await downloadpokiedex(pokemonListState, setPokmonListState, `https://pokeapi.co/api/v2/type/${type}`)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}catch(e){
            console.log(e.message)
            console.log("printing")

        }
       
    }


    useEffect(() => { downloadrelated(id); }, [id, pokemonName])
    return [pokemon, pokemonListState]
}
export default usePokemon;