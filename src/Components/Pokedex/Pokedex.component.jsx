import { useEffect, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import PokemonList from './Components/PokemonsList.component';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PokemonSpecs from './Components/PokemonSpecs.component';
import axios from 'axios';

//Style with Material-UI
import { styles } from "../../styles.js";
const useStyles = styles;

function Pokedex(props){

  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
  const [pokeUrl, setPokeUrl] = useState(BASE_URL);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const [ pokemonSpecs, setPokemonSpecs ] = useState();


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

    return(
        <Box display="flex" flexDirection="row">
            <Box className={classes.paginationButtonLeft}>
                {previousPage && <Button className={classes.arrow}><ArrowLeftIcon className={classes.arrowIcon} onClick={goToPreviousPage} /></Button>}
            </Box>
            <PokemonList pokemons={pokemons} setPokemonSpecs={setPokemonSpecs}/>
            <Box className={classes.paginationButtonRight}>
                {nextPage && <Button className={classes.arrow} ><ArrowRightIcon className={classes.arrowIcon} onClick={goToNextPage}/> </Button>}
            </Box>
            {pokemonSpecs ? <PokemonSpecs pokemon={pokemonSpecs} /> : ""}
        </Box>
    )
}

export default Pokedex;