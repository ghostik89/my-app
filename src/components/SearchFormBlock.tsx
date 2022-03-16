import React, { SyntheticEvent } from "react";
import { toast } from "react-toastify";

export const SearchFormBlock = ({checkInDate, checkoutDate}: {checkInDate?: Date, checkoutDate?: Date}) => {
    const notify = () => toast("Пример уведомления");

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        notify()
    }
    
    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <fieldset className="search-filedset">
                    <div className="row">
                    <div>
                        <label htmlFor="city">Город</label>
                        <input id="city" type="text" disabled value="Санкт-Петербург" />
                        <input type="hidden" disabled value="59.9386,30.3141" />
                    </div>
                    <div className="providers">
                        <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
                        <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
                    </div>
                    </div>
                    <div className="row">
                    <div>
                        <label htmlFor="check-in-date">Дата заезда</label>
                        <input id="check-in-date" type="date" value="2021-05-11" min="2021-05-11" max="2021-06-30" name="checkin" />
                    </div>
                    <div>
                        <label htmlFor="check-out-date">Дата выезда</label>
                        <input id="check-out-date" type="date" value="2021-05-13" min="2021-05-11" max="2021-06-30" name="checkout" />
                    </div>
                    <div>
                        <label htmlFor="max-price">Макс. цена суток</label>
                        <input id="max-price" type="text" value="" name="price" className="max-price" />
                    </div>
                    <div>
                        <div><button type="submit">Найти</button></div>
                    </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}