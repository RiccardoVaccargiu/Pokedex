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
    "&:hover":{
        cursor: 'pointer',
        background: '#ececec'
    },
    textAlign: 'center',
    margin: '10px',
    color: theme.palette.text.secondary,
    
},

onMouseOver: {

    width: '100px',
    height: '200px'
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