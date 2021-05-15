import React, { useEffect, useState } from 'react';
import {
Paper,
FormControl,
Checkbox,
FormGroup,
FormControlLabel,
GridList,
Grow
} from '@material-ui/core';
import Header from './components/header/header.component'
import CaughtPokemonsList from './components/caughtpokemonlist/caughtpokemonslist.component.jsx';

//Style with Material-UI
import { pokedexList } from './pokemonslist.style';
const useStyles = pokedexList;

const PokemonsList = ({ pokemons, setPokemons, setPokemonSpecs }) => {
    
    //const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    //console.log("pokes: ", pokemons)
    const classes = useStyles();
    const [pokemonFound, setPokemonFound] = useState();
    const [pokemonsState, setPokemonsState] = useState([]);
    const [sortBy, setSortBy] = useState('All');
    const [loading, setLoading] = useState(false);
    const localStorageContent = JSON.parse(localStorage.getItem("caughtPokemon")) || [];
    const [caughtPokemon, setCaughtPokemon] = useState(localStorageContent);
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        let caught;
        pokemons.map((p) => {
            if(localStorageContent.includes(p.name)){
                caught = true
            }
            else{
                caught = false
            }
            setPokemonsState([...pokemons, {

                caught: caught
            }])
        })
    }, [])

    
    const handlePokemonCaught = (pokemonName) => {

        //When a new pokemon get 'caught', caught property of that pokemon becomes true, on remove becomes false
        pokemons.forEach(p => {

            if(p.name === pokemonName){

                p.caught = !p.caught;
            }
        })

        //When the checkbox get clicked, if the corresponding pokemon is included in caughtPokemon it's going to be removed,
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
                <p>TROVATO</p>
            <Paper className={classes.paper} onClick={()=> setPokemonSpecs(pokemonFound)}>
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
                <img alt="pokemon" width="100px" height="100px" src={pokemonFound.sprites.front_default} />
                    <p>{pokemonFound.name}</p>
                </Paper>
            </div>
            )
        }
        else{
            switch(sortBy){

                case 'All':
                    return (
                        pokemons.map((pokemon, id) => (
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
                                    <p>{pokemon.name}</p>
                                </Paper>
                            </Grow>
                        ))
                    )
                
                case 'Caught':
                    //console.log(pokemonsState)
                    return (
                        pokemons.map((pokemon, id) => (
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
                        pokemons.map((pokemon, id) => (
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
        {/*<CaughtPokemonsList caughtPokemon={caughtPokemon} />*/}
        
        <div className={classes.gridContainer}>
            
            <Header error={error} setError={setError} search={search} setSearch={setSearch} setPokemonFound={setPokemonFound} sortBy={sortBy} setSortBy={setSortBy} />
            
            {
                error ? <h2>This pokemon doesn't exist!</h2> :
            
            <GridList cellHeight={180} cols={6} className={classes.pokemonsGridList}>

                {renderSortedPokemons()}

            </GridList>
            }
        </div>
        </>
    )
}

export default PokemonsList;