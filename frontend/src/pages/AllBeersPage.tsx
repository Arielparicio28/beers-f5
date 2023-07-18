import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Beer } from "../components/BeerInterface";

export const AllBeersPage: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/beer"
        );
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.log("Error al obtener las cervezas:", error);
      }
    };

    fetchBeers();
  }, []);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filtrarCervezas = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
    
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchInputChange}
        className="bg-gray"
        placeholder="Buscar cervezas..."
      />
      <ul>
        {filtrarCervezas.map((beer) => (
          <li key={beer._id} className="">
            <div className="d-flex justify-content-center p-3">
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} style={{ width: "100px" }} />
              </Link>
            </div>
            <div className="">
              <p>{beer.tagline}</p>
              <p>Created By: {beer.name}</p>
              <p>Contribute By: {beer.contributed_by}</p>
            </div>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
