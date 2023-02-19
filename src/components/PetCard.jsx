import React from "react";

function PetCard({ name, image, alt, color, about }) {
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        borderRadius: "1em",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        padding: "1em",
        width: "30%",
      }}
    >
      <img
        style={{
          width: "50%",
          height: "20%",
          borderRadius: "1em",
        }}
        src={image}
        alt={alt}
      />
      <div>
        <h2>{name}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default PetCard;
