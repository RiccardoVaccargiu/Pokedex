import { makeStyles } from "@material-ui/core/styles";

export const pokedexList = makeStyles((theme) => ({

gridContainer: {
    width: '900px',
    height: '630px',
    marginTop: '50px',
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
    color: '#cd5241',
    borderColor: '#cd5241'
},

loadMoreButton: {
    width: '900px',
    marginTop: '20px',
    display: 'flex',
    //direction: 'column',
    justifyContent: 'center',
    //background: 'red',
},

pokemonsGridList: {
    
    width: '900px',
    height: '580px',
    display:"flex",
    flexWrap:"wrap",
    border: '1px solid',
    borderRight: 'none',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px'
    //background: 'orange',

},

pokemonNotFound: {

    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
},

circularProgressPokemonNotFound: {

    color: '#f44336',
    marginTop: '40px'
}


}))