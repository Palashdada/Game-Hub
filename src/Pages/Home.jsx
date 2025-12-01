import React from "react";
import Banner from "../Components/Banner";
import PopularGames from "../Components/PopularGames";
import Newaletter from "../Components/Newaletter";
import Blog from "../Components/Blog";
import Categories from "../Components/Categories";
import Offers from "../Components/Offers";

const Home = () => {
  return (
    <div className="mx-auto w-11/12 m-5">
      <title>Game-Hub:Home</title>
      <section className="">
        <Banner></Banner>
      </section>
      <section>
        <PopularGames></PopularGames>
      </section>
      <section className="mt-5">
        <Newaletter></Newaletter>
      </section>
      <section>
        <Categories></Categories>
      </section>
      <section>
        <Blog></Blog>
      </section>
      <section>
        <Offers></Offers>
      </section>
    </div>
  );
};

export default Home;
