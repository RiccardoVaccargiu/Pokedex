import React, { useEffect, useState } from 'react';
import {
Paper,
FormControl,
Checkbox,
FormGroup,
FormControlLabel,
GridList,
Grow,
Typography,
CircularProgress,
Button
} from '@material-ui/core';
import Header from './components/header/header.component'

//Style with Material-UI
import { pokedexList } from './pokemonslist.style';
const useStyles = pokedexList;

const PokemonsList = ({onLoadMore, isLoading, pokemons, setPokemonSpecs }) => {
    
    const classes = useStyles();
    const [pokemonFound, setPokemonFound] = useState();
    const [sortBy, setSortBy] = useState('All');
    const localStorageContent = JSON.parse(localStorage.getItem("caughtPokemon")) || [];
    const [caughtPokemon, setCaughtPokemon] = useState(localStorageContent);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    //when component is mounted check which pokemons have been caught. if a pokemon has been caught, then p.caught = true,
    //otherwise every time the page is refreshed p.caught is equal to false and no caught pokemon will be rendered
    useEffect(() => {

        pokemons.forEach(p => {
            if(caughtPokemon.includes(p.name)){
                p.caught = true
            }
        })
    })

    const handlePokemonCaught = (pokemonName) => {

        //When a new pokemon get 'caught', caught property of that pokemon becomes true, on remove becomes false
        pokemons.forEach(p => {

            if(p.name === pokemonName){
               
                p.caught = !p.caught;
            }
        })

        //When the checkbox is clicked, if the corresponding pokemon is included in caughtPokemon it's going to be removed,
        //else is going to be added
        if(caughtPokemon.includes(pokemonName)){
            
            let clone = [...caughtPokemon]
            let index = clone.indexOf(pokemonName)
            clone.splice(index, 1)
            setCaughtPokemon(clone)
        }else{
        setCaughtPokemon([...caughtPokemon, pokemonName])
        }

    }
    

    const renderSortedPokemons = () => {

        if(pokemonFound && search){
            return(
            <div>
            <Paper className={classes.paper}>
            <FormControl component="fieldset">
                <FormGroup aria-label="position">
                    <FormControlLabel
                    value="top"
                    control={<Checkbox color="primary" checked={caughtPokemon.includes(pokemonFound.name) ? true : false} onClick={() => handlePokemonCaught(pokemonFound.name)} />}
                    label="Caught"
                    labelPlacement="end"
                    />
                </FormGroup>
                </FormControl>
                <br />    
                {/*adding the 'search' property because a searched pokemon is represented by an object with a different structure so 'pokemonspecs' doesn't know what 'miniatureSprite' is.*/}            
                <img onClick={()=> setPokemonSpecs({...pokemonFound, searched: true})} alt="pokemon" width="100px" height="100px" src={pokemonFound.sprites.front_default} />
                    <p>{pokemonFound.name}</p>
                </Paper>
            </div>
            )
        }
        else{
            switch(sortBy){

                case 'All':
                    return (
                        pokemons
                        .sort((a,b) => a.id - b.id) //sometimes fetched pokemons are in a wrong order, then should be sorted before rendering them
                        .map((pokemon, id) => (
                            <Grow in>
                                <Paper key={id} className={classes.paper}>
                                    <FormControl component="fieldset">
                                    <FormGroup aria-label="position" row>
                                        <FormControlLabel
                                        value="top"
                                        control={<Checkbox color="primary" checked={caughtPokemon.includes(pokemon.name) ? true : false} onClick={() => handlePokemonCaught(pokemon.name)} />}
                                        label="Caught"
                                        labelPlacement="end"
                                        />
                                    </FormGroup>
                                    </FormControl>
                                    <br />
                                    <img onClick={()=> setPokemonSpecs(pokemon)} alt="pokemon" width="100px" height="100px" src={pokemon.miniatureSprite} />
                                    <p><span>#{pokemon.id} </span>{pokemon.name}</p>
                                </Paper>
                            </Grow>
                        ))
                    )
                
                case 'Caught':
                    //console.log(pokemonsState)
                    return (
                        pokemons
                        .sort((a,b) => a.id - b.id)
                        .map((pokemon, id) => (
                            pokemon.caught ?
                            <Paper key={id} className={classes.paper}>
                                <FormControl component="fieldset">
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                    value="top"
                                    control={<Checkbox color="primary" checked={caughtPokemon.includes(pokemon.name) ? true : false} onClick={() => handlePokemonCaught(pokemon.name)} />}
                                    label="Caught"
                                    labelPlacement="end"
                                    />
                                </FormGroup>
                                </FormControl>
                                <br />
                                <img onClick={()=> setPokemonSpecs(pokemon)} alt="pokemon" width="100px" height="100px" src={pokemon.miniatureSprite} />
                                <p>{pokemon.name}</p>
                            
                            </Paper>
                            : ""
                        ))
                    )
                case 'To Catch':
                    return (
                        pokemons
                        .sort((a,b) => a.id - b.id)
                        .map((pokemon, id) => (
                            !pokemon.caught ?
                            <Paper key={id} className={classes.paper}>
                                <FormControl component="fieldset">
                                <FormGroup aria-label="position">
                                    <FormControlLabel
                                    value="top"
                                    control={<Checkbox color="primary" checked={caughtPokemon.includes(pokemon.name) ? true : false} onClick={() => handlePokemonCaught(pokemon.name)} />}
                                    label="Caught"
                                    labelPlacement="end"
                                    />
                                </FormGroup>
                                </FormControl>
                                <br />
                                <img onClick={()=> setPokemonSpecs(pokemon)} alt="pokemon" width="100px" height="100px" src={pokemon.miniatureSprite} />
                                <p>{pokemon.name}</p>
                            
                            </Paper>
                            : ""
                        ))
                    )
                default: return;
            }
        }
    }
    
    useEffect(() => {
        //localStorage is going to be populated with the caughtPokemon array whenever a pokemon's checkbox get checked/unchecked
        window.localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon))
    }, [caughtPokemon])

    return(
        <>
        <Paper className={classes.gridContainer}>
        <Header error={error} setError={setError} search={search} setSearch={setSearch} setPokemonFound={setPokemonFound} sortBy={sortBy} setSortBy={setSortBy} />
            
            {error ? 
            <div className={classes.pokemonNotFound}>
                <Grow in>
                    <Typography color="error" variant="h4">This pokemon does not exist...</Typography>
                </Grow>
                <br />
                <CircularProgress className={classes.circularProgressPokemonNotFound} />
            </div>
            :
            <GridList cellHeight={180} cols={6} className={classes.pokemonsGridList}>
                {renderSortedPokemons()}
            </GridList>
            }
             <div className={classes.loadMoreButton}>
                {isLoading ? <CircularProgress /> :  <Button variant='outlined' className={classes.button} onClick={onLoadMore}>Load More</Button>}
            </div>
            </Paper>
        </>
    )
}

export default PokemonsList;