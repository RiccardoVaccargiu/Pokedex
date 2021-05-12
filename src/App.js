import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokedex from './Components/Pokedex';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
  const [pokeUrl, setPokeUrl] = useState(BASE_URL);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getPokemons = async() => {

    const res = await axios.get(pokeUrl)
    const data = res.data.results

    //console.log("data: ", res.data.results)
    
    setNextPage(res.data.next)
    setPreviousPage(res.data.previous)

    function pokemonObject(result){

      result.forEach( async (pokemon) => {
        const response = await axios.get(BASE_URL +`/${pokemon.name}`)
        const data = await response
        //console.log("data fetched --> ", data)
        setPokemons(list => [...list, data.data])

        
      })
    }
    pokemonObject(data)
  }
  

  useEffect(() => {

    setIsLoading(true)
    setPokemons([]);
    getPokemons();
    setIsLoading(false)
    //console.log(pokemons)
  }, [pokeUrl])

  function goToNextPage() {

    setPokeUrl(nextPage)
  }

  function goToPreviousPage() {

    setPokeUrl(previousPage)
  }
  
  if(isLoading) return "Loading..."

  return (
    <div >
      <Pokedex pokemons={pokemons} nextPage={{nextPage, goToNextPage}} previousPage={{previousPage, goToPreviousPage}} />
    </div>
  );
}

export default App;
