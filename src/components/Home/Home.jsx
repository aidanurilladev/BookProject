import React from "react";
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import NavbarCarusel from "./NavbarCarusel";
import Hero from "../Header/Hero";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <NavbarCarusel />
      <CardList />
    </>
  );
};

export default Home;
