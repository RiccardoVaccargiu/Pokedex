import { makeStyles } from "@material-ui/core/styles";

export const pokedexList = makeStyles((theme) => ({



paper: {

    textAlign: 'center',
    margin: '10px',
    color: theme.palette.text.secondary,
    
},

inputField: {

    width: '250px',
    height: '70px',
    display: 'flex',
    //background: 'green',
    float: 'left',
    marginLeft: '10px'
},

sortingDropdown: {

    width: '110px',
    marginLeft: '490px',
    //background: 'red'
},

pokemonsGridList: {

    width: '850px',
    height: '675px',
    maxWidth: '1000px',
    display:"flex",
    flexWrap:"wrap",
    //background: 'orange',

},


}))