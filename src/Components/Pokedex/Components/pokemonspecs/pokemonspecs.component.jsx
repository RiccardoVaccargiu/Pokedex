import React from 'react';
import {Typography, Box, Grow, Paper} from '@material-ui/core'
//Style with Material-UI
import { PokemonSpecsStyle } from "./pokemonspecs.style";
import { getTypeStyle } from './typesstyle.style';
const useStyles = PokemonSpecsStyle;


function PokemonSpecs({ pokemon }){

    const classes = useStyles();
    const localStorageContent = JSON.parse(localStorage.getItem('caughtPokemon'));
    return(
        <div className={classes.pokemonSpecsCardContainer}>
            <Grow in>
            <Paper elevation={3} className={classes.pokemonSpecsCard} style={getTypeStyle(pokemon.types[0].type.name, true)}>

            {pokemon.searched ?
            <img alt="pokemon" width="200px" height="200px" src={pokemon.sprites.front_default} />
            :
            <img alt="pokemon" width="200px" height="200px" src={pokemon.miniatureSprite} />
            }
            <br />
            <Typography variant="h3">
                {localStorageContent.includes(pokemon.name) ? <img alt="caught" width='40px' height='40px' src={process.env.PUBLIC_URL + '/pokeball_full.png'} /> : <img alt="not caught" width='40px' height='40px' src={process.env.PUBLIC_URL + '/pokeball_empty.png'} />}
                {pokemon.name} <span>#{pokemon.id}</span>
            </Typography>
            
            
            <div className={classes.box}>
            {pokemon.types.map((type, id) => (
                
                    <Box key={id} style={getTypeStyle(type.type.name, false)}>{type.type.name}</Box>
                
            ))}
            </div>
            
            <br />
            
            <Typography variant="subtitle1"> <b>Weight:</b> {pokemon.weight}</Typography>
            <br />
            <Typography variant="subtitle1"><b>Abilities</b></Typography>
            {pokemon.abilities.map((ability, id) => (

            <Typography key={id} variant="subtitle1">{ability.ability.name}</Typography>
            ))}
            </Paper>
            </Grow>
        </div>
    )
}

export default PokemonSpecs;