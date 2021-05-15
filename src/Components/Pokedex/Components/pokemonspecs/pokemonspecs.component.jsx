import React from 'react';
import {Typography, Box, Card, Grow} from '@material-ui/core'
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
            <Card elevation={3} className={classes.pokemonSpecsCard}>
            
            <img alt="pokemon" width="200px" height="200px" src={pokemon.sprites.other.dream_world.front_default} />
            <br />
            <Typography variant="h3">{pokemon.name}</Typography>
            {localStorageContent.includes(pokemon.name) ? <Typography>CAUGHT</Typography> : <Typography>TO CATCH</Typography>}
            
            <div className={classes.box}>
            {pokemon.types.map((type, id) =>(
                
                    <Box key={id} style={getTypeStyle(type.type.name)}>{type.type.name}</Box>
                
            ))}
            </div>
            
            <br />
            
            <Typography variant="subtitle1"> <b>Weight:</b> {pokemon.weight}</Typography>
            <br />
            <Typography variant="subtitle1"><b>Abilities</b></Typography>
            {pokemon.abilities.map((ability, id) => (

            <Typography variant="subtitle1">{ability.ability.name}</Typography>
            ))}
            </Card>
            </Grow>
        </div>
    )
}

export default PokemonSpecs;