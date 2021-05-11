import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Style with Material-UI
import { styles } from "../styles.js";
const useStyles = styles;

const PokemonsList = ({ pokemons }) => {

    //console.log("pokes: ", pokemons)
    const classes = useStyles();

    return(
        
        <div className={classes.gridContainer}>
        {pokemons.map((pokemon, id) => (

            <div key={id} className={classes.grid}>
            <Grid container spacing={3} >
                <Paper className={classes.paper}>
                    <Pokemon key={id} pokemon={pokemon} />
                </Paper>
            </Grid>
            </div>
        ))}
        </div>
    )
}

export default PokemonsList;