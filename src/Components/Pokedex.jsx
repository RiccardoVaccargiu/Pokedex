import { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import PokemonList from './PokemonsList';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PokemonSpecs from './PokemonSpecs';

//Style with Material-UI
import { styles } from "../styles.js";
const useStyles = styles;

function Pokedex(props){

    const classes = useStyles();
    const [ pokemonSpecs, setPokemonSpecs ] = useState();

    return(
        <Box display="flex" flexDirection="row">
            <Box className={classes.paginationButtonLeft}>
                {props.previousPage.previousPage && <Button className={classes.arrow}><ArrowLeftIcon className={classes.arrowIcon} onClick={props.previousPage.goToPreviousPage} /></Button>}
            </Box>
            <PokemonList pokemons={props.pokemons} setPokemonSpecs={setPokemonSpecs}/>
            <Box className={classes.paginationButtonRight}>
                {props.nextPage.nextPage && <Button className={classes.arrow} ><ArrowRightIcon className={classes.arrowIcon} onClick={props.nextPage.goToNextPage}/> </Button>}
            </Box>
            {pokemonSpecs ? <PokemonSpecs pokemon={pokemonSpecs} /> : ""}
        </Box>
    )
}

export default Pokedex;