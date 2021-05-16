import { makeStyles } from "@material-ui/core/styles";

export const HeaderStyle = makeStyles((theme) => ({

actionHeader: {
    /*'@media (max-width: 880px)':{
        width: '730px',
    },*/
    width: '1050px',
    height: '60px',
    //background: 'red'
},
inputField: {

    width: '250px',
    height: '60px',
    display: 'flex',
    float: 'left',
},

sortingDropdown: {
    width: '150px',
    marginLeft: '85%',
},

}))