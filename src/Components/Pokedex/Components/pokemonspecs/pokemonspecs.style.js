import { makeStyles } from "@material-ui/core/styles";

export const PokemonSpecsStyle = makeStyles((theme) => ({

    
pokemonSpecsCardContainer: {

    width: "400px",
    height: "540px",
    margin: 'auto',
    marginTop: '120px',
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
    background: 'red'
},

box: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '5px',
    borderRadius: '40%',
    justifyContent: 'center'
},

}))