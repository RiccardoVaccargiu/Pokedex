import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getPokemons = async() => {

    const res = await axios.get(pokeUrl)
    const data = res.data
    setNextPage(res.data.next)
    setPreviousPage(res.data.previous)
    
    function pokemonObject(result){
      result.forEach( async (pokemon) => {
        const response = await axios.get(pokeUrl+`/${pokemon.name}`)
        const data = await response

        setPokemons(list => [...list, data.data])

        
      })
    }
    pokemonObject(data.results)
  }
  //console.log(pokemons)


  useEffect(() => {

    getPokemons();
  }, [])

  function goToNextPage() {

    setPokeUrl(nextPage)
  }

  function goToPreviousPage() {

    setPokeUrl(previousPage)
  }
  
  //if(isLoading) return "Loading..."

  return (
    <div>
    </div>
  );
}

export default App;
