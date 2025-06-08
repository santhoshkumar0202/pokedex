import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function usePokemonList(){


  let default_url = "https://pokeapi.co/api/v2/pokemon";
  //     let [pokemonlist,setpokemonlist]=useState([]);
  // let [pokedex_url,setpokedex_url]= useState(default_url)
  // let[prevurl,setprevurl]=useState(default_url)
  // let[nexturl,setnexturl]=useState(default_url)

  let [pokemonListState, setPokmonListState] = useState({
    pokemonlist: [],
    pokedex_url: default_url,
    previous_url: default_url,
    next_url: default_url,
  });

  // const POKIEDEX_URL=;
  async function downloadpokiedex() {
    let response = await axios.get(
      pokemonListState.pokedex_url ? pokemonListState.pokedex_url : default_url
    );
    let pokemonresult = response.data.results;
    // setPokmonListState((state)=>({...state,previous_url:response.data.previous,next_url:response.data.next}))
    let pokemonpromises = pokemonresult.map((pokemon) =>
      axios.get(pokemon.url)
    );
    let pokemonlist = await axios.all(pokemonpromises);
    console.log(pokemonlist);
    const pokemond = pokemonlist.map((pokemondata) => {
      let pokemon = pokemondata.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types,
      };
    });

    // setpokemonListState(pokemond);
    // console.log(response)
    // setprevurl(response.data.previous)
    // setnexturl(response.data.next)

    setPokmonListState({
      ...pokemonListState,
      pokemonlist: pokemond,
      previous_url: response.data.previous,
      next_url: response.data.next,
    });

    console.log(pokemond);
  }

  useEffect(() => {
    downloadpokiedex();
  }, [pokemonListState.pokedex_url]);

  return [pokemonListState,setPokmonListState];

}

export default usePokemonList;