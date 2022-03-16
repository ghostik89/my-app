import React from "react";
import avatar from '../img/avatar.png'

export const UserBlock = ({favoriteItemsAmount}:{favoriteItemsAmount: number}) => {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
    const hasFavoriteItems = favoriteItemsAmount ? true : false

    return (
        <div className="header">
            <div className="header-container">
                <img className="avatar" src={avatar} alt="Wade Warren" />
                <div className="info">
                    <p className="name">Wade Warren</p>
                    <p className="fav">
                        <i className={`heart-icon${hasFavoriteItems ? ' active' : ''}`}/>{favoritesCaption}
                    </p>
                </div>
            </div>
        </div>
    )
}