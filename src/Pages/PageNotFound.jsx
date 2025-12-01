import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="grid justify-center items-center text-center">
      <title>Game-Hub:Page Not Found</title>
      <h1 className="text-9xl font-bold text-red-600 ">404</h1>
      <p className="py-6 text-xl">
        Sorry! The page you’re looking for can’t be found.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
