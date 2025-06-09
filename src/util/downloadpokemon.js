import axios from "axios";
import PokedexList from "../components/pokedexList/pokedexList";

 
 
 async function downloadpokiedex(pokemonListState,setpokmonListState,default_url,limit=20) {
    let response = await axios.get(
      pokemonListState.pokedex_url ? pokemonListState.pokedex_url : default_url
    );
    let pokemonresult = response.data.results?response.data.results:response.data.pokemon;
    pokemonresult=pokemonresult.slice(0,limit);
    // setPokmonListState((state)=>({...state,previous_url:response.data.previous,next_url:response.data.next}))
    let pokemonpromises = pokemonresult.map((p) =>{
      if(p.url){
      return axios.get(p.url)
      }else if(p.pokemon.url){
       return  axios.get(p.pokemon.url)
      }
    }
    );
    let pokemonlist = await axios.all(pokemonpromises);
    console.log(PokedexList)
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

   setpokmonListState({
      ...pokemonListState,
      pokemonlist: pokemond,
      previous_url: response.data.previous,
      next_url: response.data.next,
    });

    console.log(pokemond);
  }

  export default downloadpokiedex;