import"./pokemon.css"
import { Link } from "react-router-dom";
function Pokemon({url,name,id}){

return(
       <Link to={`/pokemon/${id}`} className="pokemon-wrapper">
    <div className="pokemon">
        <div className="pokemon-name">{name}</div>
            <img className="pokemon-image" src={url} alt={name +" image"} />
    </div>
    </Link>
)

}

export default Pokemon;