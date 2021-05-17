import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grow, Card, Typography, Grid, AppBar } from '@material-ui/core';
import PokemonsList from './Components/pokemonslist/pokemonslist.component';
import PokemonSpecs from './Components/pokemonspecs/pokemonspecs.component';
import { PokedexStyles } from './pokedex.style';

//Style with Material-UI
const useStyles = PokedexStyles;

function Pokedex(){

  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemons, setPokemons] = useState([]);
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const [loadMore, setLoadMore] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [ pokemonSpecs, setPokemonSpecs ] = useState();
  const classes = useStyles();


  //every time that 'Load More' is clicked, new pokemons are requested using the 'next page' URL (retrieved from the API's JSON)
  useEffect(() => {

    getPokemons(pokeUrl);

  }, [pokeUrl])

    //Triggered by clicking 'Load More'
  function onLoadMore() {

    setPokeUrl(loadMore)
  }

  const getPokemons = async(pokeUrl) => {
    
    //when a request for new pokemons get triggered the app keeps staying in a loading state until data is retrieved
    setIsLoading(true)
    
    const res = await axios.get(pokeUrl)
    const data = res.data.results

    //saving the 'next page URL'
    setLoadMore(res.data.next)

      data.forEach( async (pokemon) => {
        const response = await axios.get(BASE_URL +`/${pokemon.name}`)
        const data = await response

        //setting state as array of objects where each object contains pokemon's info (objects are cutomized in order to contain nothing but the basic info for each pokemon)
        setPokemons(list => [...list, {
          id: data.data.id,
          name: data.data.name,
          moves: data.data.moves,
          weight: data.data.weight,
          abilities: data.data.abilities,
          caught: false,
          types: data.data.types,
          miniatureSprite: data.data.sprites.front_default,
          searched: false
        }])
        setIsLoading(false)
      
    })
  }

  return(
    <>
      <AppBar position="static" className={classes.appbar}>
        <img alt="logo" className={classes.animatedItem} src={process.env.PUBLIC_URL + '/pokeball_full.png'} />
        <Typography variant='h5' className={classes.title}>Pokèdex</Typography>
      </AppBar>
      <Grid container >
        <Grid item xs={12} lg={8} sm={12} md={6}>
        <PokemonsList onLoadMore={onLoadMore} isLoading={isLoading} pokemons={pokemons} setPokemonSpecs={setPokemonSpecs}/>
        </Grid>
        <Grid item xs={12} lg={4} sm={12} md={6}>
        {pokemonSpecs ?

        <PokemonSpecs pokemon={pokemonSpecs} />
        :            
        <div className={classes.pokemonSpecsCardContainer}>
          <Grow in>
              <Card className={classes.pokemonSpecsCardPlaceholder}>
                <Typography variant='h4'>Choose a pokemon to see its details!</Typography>
              </Card>
          </Grow>
        </div>
        }
        </Grid>
      </Grid>
    </>
  )
}
/*c*/
export default Pokedex;