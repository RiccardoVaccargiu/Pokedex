import { makeStyles } from "@material-ui/core/styles";

export const PokedexStyles = makeStyles((theme) => ({


loadMoreButton: {
    /*'@media (max-width: 1200px)':{
        width: '730px',
        marginLeft: '0px'
    },
    '@media (max-width: 880px)':{
        width: '730px',
    },*/
    width: '1050px',
    //background: 'yellow',
    //marginTop: '5px',
    //marginLeft: '230px',
    display: 'flex',
    justifyContent: 'center'
},

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
    marginLeft: '35px',
    //marginLeft: '10px',
    marginTop: '150px',
    padding: '0 auto',
},

pokemonSpecsCardPlaceholder: {

   /*width: '400px',
    height: '520px',
    padding: '10px',
    textAlign: 'center',
    direction:"column",
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    //color: '#a8a8a8',
    color: '#2196f3',
    background: '#cde7fe',
    marginLeft: '35px'*/

    height: '520px',
    padding: '10px',
    textAlign: 'center',
    direction:"column",
    //background: 'red',
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    //color: '#a8a8a8',
    color: '#2196f3',
    background: '#cde7fe',
}

}));