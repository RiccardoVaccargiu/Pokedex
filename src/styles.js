import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({

gridContainer: {

    width: '600px',
    height: '745px',
    marginTop: '50px',
    //paddingLeft: '3%',
    //background: 'yellow',
    alignItems: "center",
    justify: "center",
},

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

paginationButtonLeft: {

    width: '100px',
    height: '800px',
    //background: 'red',
    marginTop: '50px',
    marginLeft:'100px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
},

paginationButtonRight: {

    width: '100px',
    height: '800px',
    //background: 'red',
    marginTop: '50px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"

},

arrow: {

    width: '100px',
    height: '100px',
    background: '#E8E8E8',
    borderRadius: '50%'
},

arrowIcon: {

    width: '100px',
    height: '100px',
},

pokemonSpecsCard: {
    width: "400px",
    height: "600px",
    background: 'red',
    margin: 'auto'
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


}));