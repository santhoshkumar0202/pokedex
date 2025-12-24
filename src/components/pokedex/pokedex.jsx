import './pokedex.css'
import PokedexList from"../pokedexList/pokedexList.jsx"
import Search from '../search/search.jsx';
import { useState } from 'react';
import Pokemon from '../pokemon/pokemon.jsx';
import PokedexDetails from '../pokedexDetails/pokedexDetails.jsx';

function Pokedex(){
 const[searchSearchTerm,updateSearchTerm] =useState('')
return(
  <div className='pokedex-wrapper'>
    <h1>pokedex</h1>
  <Search updatedSearchTerm={updateSearchTerm}/>
  {searchSearchTerm?<div>{<PokedexDetails pokemonName={searchSearchTerm}/>}</div>:<PokedexList/>}
   
  </div>
)
}

export default Pokedex;