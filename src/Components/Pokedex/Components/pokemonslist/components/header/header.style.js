import { makeStyles } from "@material-ui/core/styles";

export const HeaderStyle = makeStyles((theme) => ({

actionHeader: {

    width: '100%',
    height: '65px',
    background: '#ececec',
    borderRadius: '5%',
},
inputField: {

    width: '250px',
    height: '60px',
    display: 'flex',
    float: 'left',
    margin: '5px'
    
},

sortingDropdown: {
    width: '150px',
    float: 'right',
    margin: '5px'
    
},

}))