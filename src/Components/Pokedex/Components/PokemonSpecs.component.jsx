import React from 'react';
import Typography from '@material-ui/core/Typography'
//Style with Material-UI
import { styles } from "../../../styles.js";
const useStyles = styles;


function PokemonSpecs({ pokemon }){

    const classes = useStyles();
    console.log(pokemon)
    return(


        <div className={classes.pokemonSpecsCard}>
            <img alt="pokemon" width="200px" height="200px" src={pokemon.sprites.other.dream_world.front_default} />
            <br />
            <Typography variant="h3">{pokemon.name}</Typography>
            <Typography><b>Types</b></Typography>
            {pokemon.types.map((type, id) =>(
                <div key={id}>
                <div>
                    <Typography variant="subtitle1"> {type.type.name}  </Typography>
                </div>
                </div>
            ))}
            <br />
            <Typography variant="subtitle1"> <b>Weight:</b> {pokemon.weight}</Typography>
            <br />
            <Typography variant="subtitle1"><b>Abilities</b></Typography>
            {pokemon.abilities.map((ability, id) => (

            <Typography variant="subtitle1">{ability.ability.name}</Typography>
            ))}
        </div>
    )
}

export default PokemonSpecs;