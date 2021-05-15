import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Grow, Card, Typography, CircularProgress } from '@material-ui/core';
import PokemonsList from './components/pokemonlist/pokemonslist.component';
import PokemonSpecs from './components/pokemonspecs/pokemonspecs.component';
import { PokedexStyles } from './pokedex.style';

//Style with Material-UI
const useStyles = PokedexStyles;

function Pokedex(){

    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    const [pokemons, setPokemons] = useState([]);
    const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const [nextPage, setNextPage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [ pokemonSpecs, setPokemonSpecs ] = useState();
    const classes = useStyles();

    const getPokemons = async() => {
      
      setIsLoading(true)
      const res = await axios.get(pokeUrl)
      const data = res.data.results

      //console.log("data: ", res.data.results)
    
      setNextPage(res.data.next)

      function pokemonObject(result){

        result.forEach( async (pokemon) => {
          const response = await axios.get(BASE_URL +`/${pokemon.name}`)
          const data = await response
          //console.log("data fetched --> ", data)
          //setPokemons(list => [...list, data.data])
          //setting state as array of objects where each object contains pokemon's info (objects are cutomized in order to contain nothing but the basic info for each pokemon)
          setPokemons(list => [...list, {
            name: data.data.name,
            moves: data.data.moves,
            weight: data.data.weight,
            abilities: data.data.abilities,
            caught: false,
            types: data.data.types,
            miniatureSprite: data.data.sprites.front_default,
          }])
          setIsLoading(false)
        
      })
    }
    pokemonObject(data)
  }
  

  useEffect(() => {
    
    getPokemons();
    //console.log("pokemons : ", pokemons)
  }, [pokeUrl])

  function goToNextPage() {

    setPokeUrl(nextPage)
  }
  

  return(
    <>
      <Box display="flex" >
          <PokemonsList pokemons={pokemons} setPokemons={setPokemons} setPokemonSpecs={setPokemonSpecs}/>
          
          {/*If no pokemon has been selected, a placeholder  will be displayed*/}
          {pokemonSpecs ?
          <PokemonSpecs pokemon={pokemonSpecs} />
          :            
          <div className={classes.pokemonSpecsCardContainer}>
          <Grow in>
              <Card className={classes.pokemonSpecsCardPlaceholder}>
                <Typography variant='h4'>Choose a pokemon to see its details!</Typography>
              </Card>
          </Grow>
        </div>}
      </Box>
      <div className={classes.loadMoreButton}>
      {isLoading ? <CircularProgress /> :  <Button variant='outlined' onClick={goToNextPage}>Load More</Button>}
    </div>
    </>
  )
}

export default Pokedex;