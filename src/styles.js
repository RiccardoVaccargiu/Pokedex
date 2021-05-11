import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({

gridContainer: {

    width: '650px',
    height: '800px',
    marginTop: '50px',
    marginLeft:'100px',
},

grid: {
    float: "left",
    display:"flex",
    flexWrap:"nowrap",
    margin: '20px',
},

paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
    
    },

}));