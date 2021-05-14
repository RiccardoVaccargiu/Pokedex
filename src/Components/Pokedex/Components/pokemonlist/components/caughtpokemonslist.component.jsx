import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Importing style
import { CaughtPokemonListStyle } from './caughtpokemonlist.style';
const useStyles = CaughtPokemonListStyle;

function CaughtPokemonsList({caughtPokemon}) {

    const classes = useStyles();

    return(

        <div >
        <List className={classes.List}>
            <ul>
        {caughtPokemon.map((pokemon, index) => (
            <ListItem key={index}>
                <ListItemText primary={`${index+1} ${pokemon}`} />
            </ListItem>
        ))}
        </ul>
        </List>
        
        </div>
    )
}

export default CaughtPokemonsList;