import { makeStyles } from "@material-ui/core/styles";

export const pokedexList = makeStyles((theme) => ({

gridContainer: {
    /*'@media (max-width: 880px)':{
        width: '730px',
    },*/
    
    width: '1050px',
    height: '630px',
    marginTop: '50px',
    //background: '#eee6ff',
    alignItems: "center",
    justify: "center",
},


paper: {
    textAlign: 'center',
    margin: '10px',
    color: theme.palette.text.secondary,
    
},


pokemonsGridList: {
    
    width: '1050px',
    height: '550px',
    display:"flex",
    flexWrap:"wrap",
    //background: 'orange',

},


}))