import React from "react";
import noResults from '../../img/no-results.png'

export const EmptyOrErrorSearchBlock = ({reasonMessage}:{reasonMessage:string}) => {
    return(
        <div className="no-results-block">
            <img src={noResults} alt='no results img'/>
            <p>{reasonMessage}</p>
        </div>
    )
}