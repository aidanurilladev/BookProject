import React from "react";
import Admin from "../components/Admin/Admin";
import CardList from "../components/CardList/CardList";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Edit from "../components/Edit/Edit";
import SignIn from "../components/Register/SignIn";
import SignUp from "../components/Register/SignUp";
import BooksInfo from "../components/CardList/BooksInfo";
import Basket from "../components/Basket";
import InfoForAuthor from "../components/Register/InfoForAuthor";
import { ProtectedRoutes } from "../const/const";

const MainPoutes = () => {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 0 },
    { link: "/list", element: <CardList />, id: 2 },
    { link: "/signIn", element: <SignIn />, id: 5 },
    { link: "/signUp", element: <SignUp />, id: 6 },
    { link: "/booksInfo/:id", element: <BooksInfo />, id: 7 },
    { link: "/basket", element: <Basket />, id: 8 },
    { link: "/infoForAuthor", element: <InfoForAuthor />, id: 9 },
    { link: "/admin", element: <Admin />, id: 1 },
    {link:"*",element:<Home/>,id:10}
  ];
  const PRIVAT = [
    { link: "/edit/:id", element: <Edit />, id: 4 },



  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
      <Route title={<ProtectedRoutes />} />
      {PRIVAT.map((el) => {
        <Route path={el.link} element={el.element} key={el.id} />;
      })}
    </Routes>
  );
};
export default MainPoutes;
