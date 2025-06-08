import './pokedex.css'
import PokedexList from"../pokedexList/pokedexList.jsx"

function Pokedex(){
return(
  <div className='pokedex-wrapper'>
    <h1>pokedex</h1>
    <input id='search-pokemon' type="text" placeholder="which pokedex you're looking for ?" />
    <PokedexList/>
  </div>
)
}

export default Pokedex;