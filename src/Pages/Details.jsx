import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const games = data.find((game) => game.id == id);
  //   console.log(games);
  return (
    <div className="w-11/12 mx-auto m-10 p-10 ">
      <title>Game-Hub-Details</title>
      <div className="  bg-base-100 shadow-sm flex justify-center gap-10 items-center ">
        <figure className="w-[30%]">
          <img
            className=" w-full h-64  object-cover rounded-lg  "
            src={games.coverPhoto}
          />
        </figure>
        <div className="">
          <h2 className="text-2xl">Title: {games.title}</h2>
          <p className="text-2xl">
            Category: <span className="text-xl">{games.category}</span>
          </p>
          <p className="text-2xl">
            Category: <span className="text-xl">{games.category}</span>
          </p>
          <p className="text-2xl">
            {" "}
            Download Link: <Link className="text-xl">{games.downloadLink}</Link>
          </p>
          <p className="text-2xl">
            Description: <span className="text-xl">{games.description}</span>
          </p>
          <p className="text-2xl">
            {" "}
            Ratings:<span className="text-xl">{games.ratings}</span>
          </p>
          <p className="text-2xl">
            {" "}
            Developer: <span className="text-xl">{games.developer}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
