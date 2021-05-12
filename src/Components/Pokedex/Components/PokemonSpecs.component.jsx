import React from 'react';

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
            <p style={{fontSize: "40px"}}>{pokemon.name}</p>
            {pokemon.types.map((type, id) =>(
                <div key={id}>
                <div>
                    <p>{type.type.name}  </p>
                </div>
                </div>
            ))}

            Weight: {pokemon.weight}

            {pokemon.abilities.map((ability, id) => (

                ability.ability.name
            ))}
        </div>
    )
}

export default PokemonSpecs;