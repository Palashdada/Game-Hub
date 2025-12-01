import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularGames = () => {
  const [game, setgame] = useState([]);
  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => {
        const populargame = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);
        setgame(populargame);
      });
  }, []);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {game.map((g) => (
          <Link key={g.id} to={`/details/${g.id}`}>
            {" "}
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={g.coverPhoto}
                  alt="Genshin Impact"
                  className="rounded-xl h-50 w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{g.title}</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions">
                  <button className=" btn-primary">
                    Developer : {g.developer}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to={"/allgames"}>
        <button className="btn mx-auto flex justify-center m-4 btn-neutral">
          Show More
        </button>
      </Link>
    </div>
  );
};

export default PopularGames;
