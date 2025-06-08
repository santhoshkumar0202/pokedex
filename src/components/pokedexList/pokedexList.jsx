
import axios from "axios";
import"./PokedexList.css"
import {useEffect, useState} from "react"
import Pokemon from "../pokemon/pokemon.jsx"
import Pokedex from "../pokedex/pokedex.jsx";


function PokedexList(){
    let default_url="https://pokeapi.co/api/v2/pokemon";
//     let [pokemonlist,setpokemonlist]=useState([]);
// let [pokedex_url,setpokedex_url]= useState(default_url)
// let[prevurl,setprevurl]=useState(default_url)
// let[nexturl,setnexturl]=useState(default_url)

let[pokemonListState,setPokmonListState]=useState({
    pokemonlist:[],
    pokedex_url:default_url,
    previous_url:default_url,
    next_url:default_url
})

// const POKIEDEX_URL=;
    async function downloadpokiedex() {
        let response= await axios.get(pokemonListState.pokedex_url?pokemonListState.pokedex_url:default_url);
        let pokemonresult=response.data.results;
        // setPokmonListState((state)=>({...state,previous_url:response.data.previous,next_url:response.data.next}))
        let  pokemonpromises=pokemonresult.map((pokemon)=>axios.get(pokemon.url))
        let pokemonlist=await axios.all(pokemonpromises)
        console.log(pokemonlist)
        const pokemond=pokemonlist.map((pokemondata)=>{
       let pokemon=pokemondata.data
            return{
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                type:pokemon.types
            }
        })

// setpokemonListState(pokemond);
// console.log(response)
// setprevurl(response.data.previous)
// setnexturl(response.data.next)

setPokmonListState({...pokemonListState,pokemonlist:pokemond,previous_url:response.data.previous,next_url:response.data.next})

         console.log(pokemond)

    }

useEffect(()=>{downloadpokiedex()},[pokemonListState.pokedex_url])


return(

<div className="pokemon-list-wrapper">

<div><h1>pokemon kist</h1></div>
<div className="page-controls">
    <button onClick={()=>setPokmonListState({...pokemonListState,pokedex_url:pokemonListState.previous_url})}>prev</button>
    <button onClick={()=>setPokmonListState({...pokemonListState,pokedex_url:pokemonListState.next_url})}>next</button>
    </div>



<div className="pokemon-list">{pokemonListState.pokemonlist.map((poke)=><Pokemon url={poke.image} name={poke.name} key={poke.id} id={poke.id}/>)}
</div>
</div>

)


}

export default PokedexList;