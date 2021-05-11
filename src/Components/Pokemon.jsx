import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = ({ pokemon }) => {


    return (
        <div>
        
            <img width="100px" height="100px" src={pokemon.sprites.front_default} />
            <p>{pokemon.name}</p>
        </div>
    );
}

export default Pokemon;