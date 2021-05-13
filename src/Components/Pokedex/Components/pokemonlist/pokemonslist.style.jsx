import { makeStyles } from "@material-ui/core/styles";

export const pokedexList = makeStyles((theme) => ({

grid: {
    float: "left",
    display:"flex",
    flexWrap:"nowrap",
    //background: 'orange',
    width: '600px',
    height: '675px',
},

paper: {
    height: '180px',
    textAlign: 'center',
    margin: '10px',
    color: theme.palette.text.secondary,
    
},

inputField: {

    width: '250px',
    height: '70px',
    display: 'flex',
    //background: 'green',
    float: 'left',
    marginLeft: '10px'
},

sortingDropdown: {

    width: '110px',
    marginLeft: '490px',
    //background: 'red'
}

}))