import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({

gridContainer: {

    width: '600px',
    height: '745px',
    marginTop: '40px',
    marginLeft: '180px',
    //paddingLeft: '3%',
    //background: 'yellow',
    alignItems: "center",
    justify: "center",
},

pokemonSpecsCard: {
    width: "300px",
    height: "600px",
    //background: 'red',
    margin: 'auto',
    marginLeft: '200px'
},

loadMoreButton: {

    width: '810px',
    //background: 'yellow',
    marginLeft: '320px',
    display: 'flex',
    justifyContent: 'center'
}


}));