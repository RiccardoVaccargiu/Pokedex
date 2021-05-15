import { makeStyles } from "@material-ui/core/styles";

export const HeaderStyle = makeStyles((theme) => ({

actionHeader: {
    /*'@media (max-width: 880px)':{
        width: '730px',
    },*/
    //background: 'red',
    width: '850px',
    height: '60px'
},
inputField: {

    width: '250px',
    height: '60px',
    display: 'flex',
    //background: 'green',
    float: 'left',
},

sortingDropdown: {
    '@media (max-width: 880px)':{
        marginLeft: '570px'
    },
    width: '150px',
    marginLeft: '700px',
    //background: 'red'
},

}))