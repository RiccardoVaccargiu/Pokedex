import React, { useEffect } from 'react';
import axios from 'axios';
import {
TextField,
FormControl,
Select,
MenuItem,
} from '@material-ui/core';
import{ HeaderStyle } from './header.style';

const useStyles = HeaderStyle;

function Header(props){

    //destructuring props error and setError (otherwise useEffect throws warnings)
    const {error} = props;
    const {setError} = props;

    const classes = useStyles();
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
    //const [error, setError] = useState(false);
    
    const onSearchChange = (e) => {
        
        //if the search input is empty, pokemonFound is emptied, otherwise everytime a new pokemon is searched, while writing, the old pokemon will be rendered
        if(!props.search){

            props.setPokemonFound();
        }
        props.setSearch(e.target.value)
    }

    useEffect(() => {
        const searchPokemon = async() => {

            props.setPokemonFound();
    
            //request for a specific pokemon (searched by name)
            await axios.get(BASE_URL+`/${props.search}`)
            .then(response => {
                props.setPokemonFound(response.data)
                }
            )
            .catch(err => props.setError(true))
        }
        
        if(props.search.length > 0){
            searchPokemon(props.search)
        }
    //eslint-disable-next-line
    }, [props.search])

    

    const onChangeSorting = (e) => {

        props.setSortBy(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
          // After 3 seconds set the error value to false
          setError(false)
        }, 2000)
        
    }, [error, setError]);

    
    return(

        <div className={classes.actionHeader}>
            <div className={classes.inputField}>
                <TextField variant="outlined" onChange={onSearchChange} placeholder="At least 2 chars to search" />
            </div>
            <div className={classes.sortingDropdown}>
                <FormControl>
                    <Select
                    style={{width: '150px'}}
                    variant="outlined"
                    labelId="select-label"
                    id="select"
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