import React from "react";
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import NavbarCarusel from "./NavbarCarusel";

const Home = () => {
  return (
    <>
      <Header />
      <NavbarCarusel />
      <CardList />
    </>
  );
};

export default Home;
