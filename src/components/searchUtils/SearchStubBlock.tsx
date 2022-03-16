import React from "react";
import startSearch from '../../img/start-search.png'

export const SearchStubBlock = () => {
    return(
        <div className="before-results-block">
            <img src={startSearch} alt='start-search'/>
            <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
        </div>
    )
}