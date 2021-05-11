import React from 'react';

function Pagination(props){

    return(
        <div>
        {props.previousPage.previousPage && <button onClick={props.previousPage.goToPreviousPage}>Previous</button>}
        {props.nextPage.nextPage && <button onClick={props.nextPage.goToNextPage}>Next</button>}
        </div>
    );
}

export default Pagination;