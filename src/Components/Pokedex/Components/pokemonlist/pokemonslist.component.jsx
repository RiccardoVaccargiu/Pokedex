import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
Button,
Paper,
Grid,
TextField,
CircularProgress,
InputLabel,
FormControl,
Select,
MenuItem,
Checkbox,
FormLabel,
FormGroup,
FormControlLabel,
GridList,
ListItem} from '@material-ui/core';
import CaughtPokemonsList from './components/caughtpokemonslist.component.jsx';

//Style with Material-UI
import { pokedexList } from './pokemonslist.style';
const useStyles = pokedexList;

const PokemonsList = ({ pokemons, setPokemonSpecs }) => {
    
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    //console.log("pokes: ", pokemons)
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [pokemonFound, setPokemonFound] = useState();
    const [pokemonsState, setPokemonsState] = useState([]);
    const [sortBy, setSortBy] = useState('All');
    const [error, setError] = useState('');
    const localStorageContent = JSON.parse(localStorage.getItem("caughtPokemon")) || [];
    const [caughtPokemon, setCaughtPokemon] = useState(localStorageContent);

    useEffect(() => {
        let caught;
        pokemons.map((p) => {
            if(localStorageContent.includes(p.name)){
                caught = true
            }
            else{
                caught = false
            }
            setPokemonsState([...pokemonsState, {
                name: p.name,
                moves: p.moves,
                weight: p.weight,
                abilities: p.abilities,
                caught: caught,
                types: p.types,
                sprites: p.sprites
            }])
        })
    }, [pokemons])

    console.log(pokemonsState)
    const onSearchChange = (e) => {
        
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const searchPokemon = async() => {

        //setIsLoading(true);
        setPokemonFound();
        setError('');
        //console.log("search: ",search)
        await axios.get(BASE_URL+`/${search}`)
        .then(response => {
            setPokemonFound(response.data)
            }
        )
        .catch(err => setError("No Pokemon Found..."))
        //setIsLoading(false)
    }

    const onChangeSorting = (e) => {

        setSortBy(e.target.value)
    }

    
    const handlePokemonCaught = (pokemonName) => {

        //When a new pokemon get 'caught', caught property of that pokemon becomes true, on remove becomes false
        pokemonsState.forEach(p => {

            if(p.name == pokemonName){

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

        switch(sortBy){

            case 'All':
                return (
                    pokemons.map((pokemon, id) => (
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
                                <img onClick={()=> setPokemonSpecs(pokemon)} alt="pokemon" width="100px" height="100px" src={pokemon.sprites.front_default} />
                                <p>{pokemon.name}</p>
                            
                            </Paper>
                    ))
                )
            
            case 'Caught':
                console.log(pokemonsState)
                return (
                    pokemonsState.map((pokemon, id) => (
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
                            <img onClick={()=> setPokemonSpecs(pokemon)} alt="pokemon" width="100px" height="100px" src={pokemon.sprites.front_default} />
                            <p>{pokemon.name}</p>
                        
                        </Paper>
                        : ""
                    ))
                )
            case 'To Catch':
                return (
                    pokemonsState.map((pokemon, id) => (
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
                            <img onClick={()=> setPokemonSpecs(pokemon)} alt="pokemon" width="100px" height="100px" src={pokemon.sprites.front_default} />
                            <p>{pokemon.name}</p>
                        
                        </Paper>
                        : ""
                    ))
                )
                
        }
    }
    
    useEffect(() => {
        
        //localStorage is going to be populated with the caughtPokemon array whenever a pokemon's checkbox get checked/unchecked
        window.localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon))
        
        //setPokemonsState(pokemonsState)
    }, [caughtPokemon])

    
    return(
        <>
        <CaughtPokemonsList caughtPokemon={caughtPokemon} />
        
        <div className={classes.gridContainer}>
            <div className={classes.inputField} >
                <TextField variant="outlined" onChange={onSearchChange} />
                
                {search.length > 0 ? 
                <Button onClick={searchPokemon}>Search</Button>
                :
                <Button disabled >Search</Button>
                }       
            </div>

            <div className={classes.sortingDropdown}>
                <FormControl>
                    <InputLabel>Sort By </InputLabel>
                    <Select
                        style={{width: '100px'}}
                        id="sorting"
                        value={sortBy}
                        onChange={onChangeSorting}
                        name="selectSorting"
                    >
                        <MenuItem value="Caught">Caught</MenuItem>
                        <MenuItem value="To Catch">To Catch</MenuItem>
                        <MenuItem value="All">All</MenuItem>
                    </Select>
                </FormControl>
            </div>
        
            {error !== '' && search.length > 0 ?
            
            <p>{error}</p>
            
            :
            
            pokemonFound && search.length > 0 ?
            
            <Grid container spacing={3}>
                <Paper className={classes.paper} onClick={()=> setPokemonSpecs(pokemonFound)}>
                <img alt="pokemon" width="100px" height="100px" src={pokemonFound.sprites.front_default} />
                    <p>{pokemonFound.name}</p>
                    {/*<Pokemon key={id} pokemon={pokemon} />*/}
                </Paper>
            </Grid>
            
            :
            <div style={{marginTop: '85px', marginLeft: '20px'}}>
            <GridList cellHeight={180} cols={6} className={classes.pokemonsGridList}>

                {renderSortedPokemons()}

            </GridList>
            </div>
            
            }
        </div>
        </>
    )
}

export default PokemonsList;