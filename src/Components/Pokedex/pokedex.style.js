import { makeStyles } from "@material-ui/core/styles";

export const PokedexStyles = makeStyles((theme) => ({

pokemonSpecsCardContainer: {
    width: "400px",
    height: "540px",
    margin: 'auto',
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
    color: 'grey',
    background: '#ececec',
},

appbar: {

    background: '#222224',
    display: 'flex',
    flexDirection: 'row'
},

animatedItem: {
    width: "50px",
    height: "50px",
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
},

"@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "rotate(0deg)"
    },
    "100%": {
      opacity: 1,
      transform: "rotate(360deg)"
    }
},

title: {

    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

}));