import React from "react";
import NavBar from "../Components/NavBar";

const AboutUs = () => {
  return (
    <div>
      <title>Game-Hub:About Us</title>
      <section>
        {" "}
        <div className=" min-h-screen bg-base-200 w-11/12 mx-auto text-center mt-5">
          <div>
            <h1 className="text-5xl font-bold text-primary">About GameHub</h1>
            <p className="py-6 text-lg ">
              Welcome to <span className="font-bold">GameHub</span> — your
              ultimate destination for discovering and sharing your favorite
              games! We bring together a passionate community of gamers who love
              to explore new titles, rate games, and stay up-to-date with the
              latest releases.
            </p>
            <p className="text-lg ">
              Our mission is to make gaming more social and fun. Whether you’re
              a casual player or a pro, GameHub helps you find games that match
              your taste — fast, simple, and visually stunning.
            </p>
            <button className="btn btn-primary mt-4">Join Our Community</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
