import { makeStyles } from "@material-ui/core/styles";

export const pokedexList = makeStyles((theme) => ({

gridContainer: {

    width: '850px',
    height: '775px',
    marginTop: '40px',
    //background: 'yellow',
    alignItems: "center",
    justify: "center",
},


paper: {

    textAlign: 'center',
    margin: '10px',
    color: theme.palette.text.secondary,
    
},



pokemonsGridList: {

    width: '850px',
    height: '675px',
    maxWidth: '850px',
    display:"flex",
    flexWrap:"wrap",
    //background: 'orange',

},




}))