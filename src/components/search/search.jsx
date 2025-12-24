import "./search.css"

function Search({updatedSearchTerm}){

    function debouncing(fn,delay){
        let timer;
        return function(...args){
            clearTimeout(timer)
            timer=setTimeout(()=>{fn.apply(this,args)},delay)
        }
    }

    let debouncingSerach=debouncing(function(text){updatedSearchTerm(text)},5000);

    return(<>
    <div className="search-wrap"> 
    <input id='search-pokemon' type="text" placeholder="which pokedex you're looking for ?" onChange={(e)=>debouncingSerach(e.target.value)}/>
    </div>
                   
    </>)
}


export default Search;