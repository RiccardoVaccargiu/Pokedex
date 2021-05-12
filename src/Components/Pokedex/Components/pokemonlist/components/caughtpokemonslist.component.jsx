import React from 'react';

function CaughtPokemonsList({caughtPokemon}) {

    return(

        <ul>
        {caughtPokemon.map(pokemon => (

            <li>{pokemon}</li>
        ))}
        </ul>
    )
}

export default CaughtPokemonsList;