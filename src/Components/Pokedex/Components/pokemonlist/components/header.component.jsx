import React, { useState } from 'react';
import axios from 'axios';
import {
Button,
TextField,
FormControl,
Select,
MenuItem
} from '@material-ui/core';
import{ HeaderStyle } from './header.style';

const useStyles = HeaderStyle;

function Header(props){

    const classes = useStyles();
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    const onSearchChange = (e) => {
        
        if(!props.search){ //if the search input is empty, pokemonFound is emptied, otherwise everytime a new pokemon is searched, while writing, the old pokemon will be rendered

            props.setPokemonFound();
        }
        props.setSearch(e.target.value)
        console.log(e.target.value)
    }

    const searchPokemon = async() => {

        //setIsLoading(true);
        props.setPokemonFound();
        props.setError('');
        //console.log("search: ",search)
        await axios.get(BASE_URL+`/${props.search}`)
        .then(response => {
            props.setPokemonFound(response.data)
            }
        )
        .catch(err => props.setError("No Pokemon Found..."))
    }

    const onChangeSorting = (e) => {

        props.setSortBy(e.target.value)
    }

    return(
        <div className={classes.actionHeader}>
                <div className={classes.inputField} >
                    <TextField variant="outlined" onChange={onSearchChange} />
                    
                    {props.search.length > 0 ? 
                    <Button onClick={searchPokemon}>Search</Button>
                    :
                    <Button disabled >Search</Button>
                    }       
                </div>

                <div className={classes.sortingDropdown}>
                <FormControl>
                <Select
                style={{width: '150px'}}
                variant="outlined"
                labelId="select-label"
                id="demo-customized-select"
                value={props.sortBy}
                onChange={onChangeSorting}
                >
                
                <MenuItem value='All'>All</MenuItem>
                <MenuItem value='Caught'>Caught</MenuItem>
                <MenuItem value='To Catch'>To Catch</MenuItem>
                </Select>
            </FormControl>
                    </div>
            </div>
    )
}

export default Header;