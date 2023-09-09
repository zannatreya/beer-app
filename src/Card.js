import React from "react";

const Card = ({ beer }) => {
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={beer.image_url}
          alt={beer.name}
          className="w-[50px] rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>First Brewed: {beer.first_brewed}</p>
      </div>
    </div>
  );
};

export default Card;
