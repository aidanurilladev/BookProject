import React from "react";
import Admin from "../components/Admin/Admin";
import CardList from "../components/CardList/CardList";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Edit from "../components/Edit/Edit";
import SignIn from "../components/Register/SignIn";
import SignUp from "../components/Register/SignUp";

const MainPoutes = () => {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 0 },
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/list", element: <CardList />, id: 2 },
    { link: "/edit/:id", element: <Edit />, id: 3 },
    { link: "/edit/:id", element: <Edit />, id: 4 },
    { link: "/signIn", element: <SignIn />, id: 5 },
    { link: "/signUp", element: <SignUp />, id: 6 },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};
export default MainPoutes;
