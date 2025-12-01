import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllGames = () => {
  const data = useLoaderData();
  console.log(data);
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc"); // default: high to low

  // Get unique categories for filter dropdown
  const categories = ["All", ...new Set(data.map((g) => g.category))];

  // Filter by category
  let displayedGames = data.filter(
    (g) => category === "All" || g.category === category
  );

  // Sort by rating numerically
  displayedGames.sort((a, b) =>
    sortOrder === "asc"
      ? Number(a.ratings) - Number(b.ratings)
      : Number(b.ratings) - Number(a.ratings)
  );
  return (
    <div className="w-11/12 mx-auto">
      {/* --------- FILTER & SORT --------- */}
      <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4">
        {/* Category Filter */}
        <div>
          <span className="mr-2 font-semibold">Category:</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-sm"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Sort */}
        <div>
          <span className="mr-2 font-semibold">Sort by Rating:</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-sm"
          >
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {displayedGames.map((g) => (
          <Link key={g.id} to={`/details/${g.id}`}>
            {" "}
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img src={g.coverPhoto} className="rounded-xl h-50 w-full" />
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
    </div>
  );
};

export default AllGames;
