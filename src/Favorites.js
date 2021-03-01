import React from 'react'
import Card from './Card'

export default function Favorites(props) {

    const displayFavorites = () => props.favorites.map(favorite => {
        return <Card clickAction={props.removeFavorite} key={favorite.id} character={favorite} />
    })

    return (
        <ul className="favorites-list">
            {displayFavorites()}
        </ul>
    )
}