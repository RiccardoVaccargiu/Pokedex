import { makeStyles } from "@material-ui/core/styles";

export const pokedexList = makeStyles((theme) => ({

gridContainer: {
    
    width: '100%',
    marginTop: '10px',
    //background: '#eee6ff',
    alignItems: "center",
    justify: "center",
},


paper: {
    '&:hover':{

        cursor: 'pointer',
        background: '#ececec'
    },
    textAlign: 'center',
    margin: '10px',
    color: theme.palette.text.secondary,
    
},

button: {

   // background: '#ee9c8b',
    color: '#CC0000',
    borderColor: '#CC0000',
    margin: '5px',
},

loadMoreButton: {
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    background: '#ececec',
},

pokemonsGridList: {
    
    width: '100%',
    height: '520px',
    display:"flex",
    flexWrap:"wrap",

},

pokemonNotFound: {

    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '520px',
    justifyContent: 'center',
    flexDirection: 'column',
},

circularProgressPokemonNotFound: {

    color: '#f44336',
    marginTop: '40px'
}


}))