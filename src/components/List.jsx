import React from 'react'
import { nanoid } from 'nanoid';
import PetCard from './PetCard';

function List({ pets = [] }) {
  return (
    <ul style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      {pets.map((pet) => (
        <PetCard key={nanoid()}{...pet} />
      ))}
    </ul>
  );
}

export default List