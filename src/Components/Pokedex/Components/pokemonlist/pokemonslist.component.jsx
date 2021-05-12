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
FormControlLabel} from '@material-ui/core';


//Style with Material-UI
import { styles } from "../../../../styles.js";
const useStyles = styles;

const PokemonsList = ({ pokemons, setPokemonSpecs }) => {
    
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    //console.log("pokes: ", pokemons)
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [pokemonFound, setPokemonFound] = useState();
    const [sortBy, setSortBy] = useState();
    const [error, setError] = useState('');
    const localStorageContent = JSON.parse(localStorage.getItem("caughtPokemon")) || [];
    const [caughtPokemon, setCaughtPokemon] = useState(localStorageContent);

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

        if(caughtPokemon.includes(pokemonName)){
            
            let clone = [...caughtPokemon]
            let index = clone.indexOf(pokemonName)
            clone.splice(index, 1)
            setCaughtPokemon(clone)

        }else{

        setCaughtPokemon([...caughtPokemon, pokemonName])
        }
    }
    
    useEffect(() => {

        window.localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon))
    }, [caughtPokemon])

    return(
        <>
        
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
                    >
                        <MenuItem>Caught</MenuItem>
                        <MenuItem>To Catch</MenuItem>
                        <MenuItem>All</MenuItem>
                    </Select>
                </FormControl>
            </div>
        
        {error !== '' && search.length > 0 ? <p>{error}</p>
        
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
        
        <div className={classes.grid}>
            <Grid  container>
        {pokemons.map((pokemon, id) => (
                <Paper key={id} className={classes.paper}>
                    <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" checked={caughtPokemon.includes(pokemon.name) ? "checked" : ""} onClick={() => handlePokemonCaught(pokemon.name)} />}
                        label="Caught"
                        labelPlacement="end"
                        />
                    </FormGroup>
                    </FormControl>
                    <br />
                <img onClick={()=> setPokemonSpecs(pokemon)} alt="pokemon" width="100px" height="100px" src={pokemon.sprites.front_default} />
                <p>{pokemon.name}</p>
                
                </Paper>
        ))}
        </Grid>
            </div>
        }
        </div>
        </>
    )
}

export default PokemonsList;