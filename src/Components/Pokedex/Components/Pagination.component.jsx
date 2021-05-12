import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function Pagination(props){

    return(
        <div>
        {props.previousPage.previousPage && <Button onClick={props.previousPage.goToPreviousPage}>Previous</Button>}
        {props.nextPage.nextPage && <Button onClick={props.nextPage.goToNextPage}>Next</Button>}
        </div>
    );
}

export default Pagination;