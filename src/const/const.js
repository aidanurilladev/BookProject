import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const API = `http://localhost:3000/data`;
export const API_BASKET = `http://localhost:3000/basket`;

export const ACTION_CARD = {
  GET_CARD: "GET_CARD",
};

export const calcTotalPrice = (product) => {
  return product.reduce((acc, el) => {
    return acc + el.subPrice;
  }, 0);
};

export const calcSubPrice = (product) => +product.count * +product.item.price;

export const ADMIN = [
  {
    email: "js-20@gmail.com",
    password: "motionweb",
  },
];

export const ProtectedRoutes = () => {
  const { user } = useAuthContext();
  function isAllow(){
    if(user.email === "js-20@gmail.com"){
      return true
    } else{
      return false
    }
  }
  isAllow() ? <Outlet/> : <Navigate to="/SignUp"/>
};
