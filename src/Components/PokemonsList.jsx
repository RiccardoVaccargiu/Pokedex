import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import Button from '@material-ui/core/Button'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Style with Material-UI
import { styles } from "../styles.js";
const useStyles = styles;

const PokemonsList = ({ pokemons, setPokemonSpecs }) => {
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    //console.log("pokes: ", pokemons)
    const classes = useStyles();
    const [search, setSearch] = useState('');

    const onSearchChange = (e) => {

        setSearch(e.target.value)
    }

    useEffect(()=> {

        console.log("search: ",search)
        axios.get(BASE_URL+`/${search}`)
        .then(res => console.log(res))
        
    }, [search])
    
    return(
        <>

        <input type="text" onChange={onSearchChange}/>
        <Button >Search</Button>

        <div className={classes.gridContainer}>

        {pokemons.map((pokemon, id) => (
            <div key={id} className={classes.grid}>
            <Grid container spacing={3}>
                <Paper className={classes.paper} onClick={()=> setPokemonSpecs(pokemon)}>
                <img width="100px" height="100px" src={pokemon.sprites.front_default} />
                 <p>{pokemon.name}</p>
                    {/*<Pokemon key={id} pokemon={pokemon} />*/}
                </Paper>
            </Grid>
            </div>
        ))}
        </div>
        </>
    )
}

export default PokemonsList;