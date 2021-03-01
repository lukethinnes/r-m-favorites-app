import React from 'react'

export default function Card({ character, clickAction }) {

  const { name, image } = character

  const handleClick = (event) => {
    clickAction(character)
  }

  return (
    <li onClick={handleClick}>
      <h2>{name}</h2>
      <img src={image} alt={character.name} />
    </li>
  )
}