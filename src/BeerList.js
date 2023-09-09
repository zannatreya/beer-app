import React, { useEffect, useState } from "react";
import Card from "./Card";

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for beers..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <div className="grid md:grid-cols-3 gap-10 my-16">
        {filteredBeers.map((beer) => (
          <Card key={beer.id} beer={beer}></Card>
        ))}
      </div>
    </div>
  );
};

export default BeerList;
