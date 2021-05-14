import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@material-ui/core';
import PokemonsList from './components/pokemonlist/pokemonslist.component';
import PokemonSpecs from './components/pokemonspecs.component';


//Style with Material-UI
import { styles } from "../../styles.js";
const useStyles = styles;

function Pokedex(){

    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    const [pokemons, setPokemons] = useState([]);
    const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');
    //const [isLoading, setIsLoading] = useState(true);
    const [ pokemonSpecs, setPokemonSpecs ] = useState();
    const classes = useStyles();

    const getPokemons = async() => {
      
      //setIsLoading(true)
      const res = await axios.get(pokeUrl)
      const data = res.data.results

      //console.log("data: ", res.data.results)
    
      setNextPage(res.data.next)
      setPreviousPage(res.data.previous)

      function pokemonObject(result){

        result.forEach( async (pokemon) => {
          const response = await axios.get(BASE_URL +`/${pokemon.name}`)
          .then(/*setIsLoading(false)*/)
          const data = await response
          //console.log("data fetched --> ", data)
          setPokemons(list => [...list, data.data])

        
      })
    }
    pokemonObject(data)
  }
  

  useEffect(() => {
    
    //setPokemons([]);
    getPokemons();
    //console.log(pokemons)
  }, [pokeUrl])

  function goToNextPage() {

    setPokeUrl(nextPage)
  }

  function goToPreviousPage() {

    setPokeUrl(previousPage)
  }
  

    return(
      <>
        <Box display="flex" >
            {/*<Box className={classes.paginationButtonLeft}>
                {previousPage && <Button className={classes.arrow}><ArrowLeftIcon className={classes.arrowIcon} onClick={goToPreviousPage} /></Button>}
            </Box>*/}
            <PokemonsList pokemons={pokemons} setPokemonSpecs={setPokemonSpecs}/>
            {/*<Box className={classes.paginationButtonRight}>
                {nextPage && <Button className={classes.arrow} ><ArrowRightIcon className={classes.arrowIcon} onClick={goToNextPage}/> </Button>}
            </Box>*/}
            
            {pokemonSpecs ? <PokemonSpecs pokemon={pokemonSpecs} /> : ""}
        </Box>
        <div className={classes.loadMoreButton}>
        <Button variant='outlined' onClick={goToNextPage}>Load More</Button>
      </div>
      </>
    )
}

export default Pokedex;