import React from "react";
import Header from "../Header/Header";
import NavbarCarusel from "./NavbarCarusel";
import CardForMain from "../CardList/CardForMain";
import Footer from "../Header/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <NavbarCarusel />
      <CardForMain />
      <Footer />
    </>
  );
};

export default Home;
