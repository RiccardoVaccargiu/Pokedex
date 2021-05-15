import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    width: '220px',
    maxWidth: 220,
    position: 'relative',
    overflow: 'auto',
    height: '500px',
    maxHeight: 600,
    marginTop: '150px',
    marginRight: '10px'
}

}));