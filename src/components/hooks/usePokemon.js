import axios from "axios";
import { useEffect, useState } from "react";
function usePokemon(id) {

    let [pokemon, setPokemon] = useState(null);
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


    }
    useEffect(() => { download(id) }, [])
    return[pokemon]
}
export default usePokemon;