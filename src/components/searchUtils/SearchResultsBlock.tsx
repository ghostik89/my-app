import React from "react";
import result1 from '../../img/result-1.png'
import result2 from '../../img/result-2.png'


export const SearchResultsBlock = () => {
    return (
        <>
            <div className="search-results-header">
                <p>Результаты поиска</p>
                <div className="search-results-filter">
                    <span><i className="icon icon-filter"></i> Сортировать:</span>
                    <select>
                        <option selected>Сначала дешёвые</option>
                        <option>Сначала дорогие</option>
                        <option>Сначала ближе</option>
                    </select>
                </div>
            </div>
            <ul className="results-list">
            <li className="result">
                <div className="result-container">
                <div className="result-img-container">
                    <div className="favorites active"></div>
                    <img className="result-img" src={result1} alt="result 1"/>
                </div>	
                <div className="result-info">
                    <div className="result-info--header">
                    <p>YARD Residence Apart-hotel</p>
                    <p className="price">13000&#8381;</p>
                    </div>
                    <div className="result-info--map"><i className="map-icon"></i> 2.5км от вас</div>
                    <div className="result-info--descr">Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.</div>
                    <div className="result-info--footer">
                    <div>
                        <button>Забронировать</button>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            <li className="result">
                <div className="result-container">
                <div className="result-img-container">
                    <div className="favorites"></div>
                    <img className="result-img" src={result2} alt="result 2"/>
                </div>	
                <div className="result-info">
                    <div className="result-info--header">
                    <p>Akyan St.Petersburg</p>
                    <p className="price">13000&#8381;</p>
                    </div>
                    <div className="result-info--map"><i className="map-icon"></i> 1.1км от вас</div>
                    <div className="result-info--descr">Отель Akyan St-Petersburg с бесплатным Wi-Fi на всей территории расположен в историческом здании Санкт-Петербурга.</div>
                    <div className="result-info--footer">
                    <div>
                        <button>Забронировать</button>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            </ul>
        </>
    )
}