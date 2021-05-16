import { makeStyles } from "@material-ui/core/styles";

export const CaughtPokemonListStyle = makeStyles((theme) => ({

List: {
    /*'@media (max-width: 1200px)':{
        width: '0px',
        marginRight: '0px'
    },
    '@media (min-width: 1200px)':{
        width: '220px',
        marginRight: '10px'
    },*/
    color: 'white',
    background: '#505050',
    width: '180px',
    minWidth: 180,
    position: 'relative',
    overflow: 'auto',
    height: '734px',
    maxHeight: '734px',
    //marginTop: '150px',
    marginRight: '20px',
    float: 'right'
}

}));