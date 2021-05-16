import { makeStyles } from "@material-ui/core/styles";

export const PokedexStyles = makeStyles((theme) => ({

pokemonSpecsCardContainer: {
    width: "400px",
    height: "540px",
    marginLeft: '15px',
    marginTop: '120px',
    padding: '0 auto',
},

pokemonSpecsCardPlaceholder: {
    height: '520px',
    padding: '10px',
    textAlign: 'center',
    direction:"column",
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    color: '#2196f3',
    background: '#cde7fe',
}

}));