import React from 'react'
import Card from './Card'

export default function CharacterList(props) {

    const displayCharacters = () => props.characters.map(character => {
        return <Card key={character.id} clickAction={props.addFavorite} character={character} />
    })

    return (
        <ul className="character-list">
            {displayCharacters()}
        </ul>
    )
}