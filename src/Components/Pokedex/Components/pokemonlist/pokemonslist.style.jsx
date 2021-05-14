import { makeStyles } from "@material-ui/core/styles";

export const pokedexList = makeStyles((theme) => ({

gridContainer: {

    width: '850px',
    height: '745px',
    marginTop: '40px',
    background: 'yellow',
    alignItems: "center",
    justify: "center",
},


paper: {

    textAlign: 'center',
    margin: '10px',
    color: theme.palette.text.secondary,
    
},

inputField: {

    width: '250px',
    height: '70px',
    display: 'flex',
    background: 'green',
    float: 'left',
},

sortingDropdown: {

    width: '110px',
    marginLeft: '690px',
    background: 'red'
},

pokemonsGridList: {

    width: '850px',
    height: '675px',
    maxWidth: '850px',
    display:"flex",
    flexWrap:"wrap",
    background: 'orange',

},

actionHeader: {

    background: 'red',
    width: '800px',
    height: '100px'
}


}))