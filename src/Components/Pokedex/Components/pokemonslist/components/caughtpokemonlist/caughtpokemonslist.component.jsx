import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Importing style
import { CaughtPokemonListStyle } from './caughtpokemonslist.style';
const useStyles = CaughtPokemonListStyle;

function CaughtPokemonsList({pokemons }) {

    const classes = useStyles();

    return(

        <List className={classes.List}>
        {pokemons.map((pokemon, index) => (
            pokemon.caught &&
            <ListItem key={index} >
                <img alt="caught" width='40px' height='40px' src={process.env.PUBLIC_URL + '/pokeball_full.png'} />
                <ListItemText primary={`${pokemon.name}`} />
            </ListItem>
        ))}
        </List>
    )
}

export default CaughtPokemonsList;