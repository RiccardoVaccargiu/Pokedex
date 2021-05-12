import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon.component';
import Button from '@material-ui/core/Button'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

//Style with Material-UI
import { styles } from "../../../styles.js";
const useStyles = styles;

const PokemonsList = ({ pokemons, setPokemonSpecs }) => {
    
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    //console.log("pokes: ", pokemons)
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [pokemonFound, setPokemonFound] = useState();

    const [error, setError] = useState('');

    const onSearchChange = (e) => {
        
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    function searchPokemon(){

        setPokemonFound();
        setError('');
        console.log("search: ",search)
        axios.get(BASE_URL+`/${search}`)
        .then(response => 
            setPokemonFound(response.data)
        )
        .catch(err => setError("No Pokemon Found..."))

    }
    
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
        
        {error !== '' && search.length > 0 ? <p>{error}</p>
        
        :
        
        pokemonFound && search.length > 0 ?
        
        <Grid container spacing={3}>
            <Paper className={classes.paper} onClick={()=> setPokemonSpecs(pokemonFound)}>
            <img width="100px" height="100px" src={pokemonFound.sprites.front_default} />
                <p>{pokemonFound.name}</p>
                {/*<Pokemon key={id} pokemon={pokemon} />*/}
            </Paper>
        </Grid>
        
        :
        
        pokemons.map((pokemon, id) => (
            <div key={id} className={classes.grid}>
            <Grid container spacing={3}>
                <Paper className={classes.paper} onClick={()=> setPokemonSpecs(pokemon)}>
                <img width="100px" height="100px" src={pokemon.sprites.front_default} />
                 <p>{pokemon.name}</p>
                    {/*<Pokemon key={id} pokemon={pokemon} />*/}
                </Paper>
            </Grid>
            </div>
        ))
        }
        </div>
        </>
    )
}

export default PokemonsList;