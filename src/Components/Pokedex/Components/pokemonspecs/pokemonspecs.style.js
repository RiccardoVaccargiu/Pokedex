import { makeStyles } from "@material-ui/core/styles";

export const PokemonSpecsStyle = makeStyles((theme) => ({

    
pokemonSpecsCardContainer: {
    /*'@media (min-width: 1200px)':{
        marginLeft: '30px',
        alignContent: 'center',
        padding: '0 auto',
        textAlign: 'center'
    },
    '@media (max-width: 1200px)':{
        display: 'none',
        marginLeft: '0px',
        width: '0px',
        margin: '0 auto',
        textAlign: 'center'
    },*/
    width: "400px",
    height: "540px",
    //background: 'red',
    margin: 'auto',
    //marginLeft: '10px',
    marginTop: '150px',
    padding: '0 auto',
},
    
pokemonSpecsCard: {

    '&:hover': {

        background: '#ececec'
    },
    height: '520px',
    padding: '10px',
    textAlign: 'center',
    direction:"column",
    /*display: 'flex',
    justifyContent:"center",
    alignItems:"center",*/
},

box: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '5px',
    borderRadius: '40%',
    justifyContent: 'center'
},

}))