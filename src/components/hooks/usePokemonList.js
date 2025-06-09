import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import downloadpokiedex from "../../util/downloadpokemon";

function usePokemonList(default_url){



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


   useEffect(() => {
   downloadpokiedex(pokemonListState,setPokmonListState,default_url);
  }, [pokemonListState.pokedex_url]);
  return [pokemonListState,setPokmonListState];

}

export default usePokemonList;