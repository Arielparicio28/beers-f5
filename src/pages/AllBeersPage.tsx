import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Beer } from "../components/BeerInterface";

export const AllBeersPage: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch(
          "https://f5-beers-065cad3017be.herokuapp.com/beers"
        );
        const data = await response.json();
        setBeers(data);
        console.log(data);
      } catch (error) {
        console.log("Error al obtener las cervezas:", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id} className="">
            
            <div className="d-flex justify-content-center p-3  ">
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} style={{ width: "100px" }} />
            </Link>
            </div>

            <div className="">
            <p>{beer.tagline}</p>
            <p>Created By:{beer.name}</p>
            <p>Contribute By:{beer.contributed_by}</p>
            </div>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
