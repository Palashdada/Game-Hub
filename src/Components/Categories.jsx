import React, { useEffect, useState } from "react";

const Categories = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  const categories = [...new Set(games.map((game) => game.category))];
  return (
    <div>
      <section id="categories" className="w-11/12 mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Game Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-base-100 rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl mb-2">🎮</div>
              <h3 className="font-bold">{cat}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
