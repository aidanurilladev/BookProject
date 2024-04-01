import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContext from "./context/ProductContext";
import MainPoutes from "./routes/MainPoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import CartContext from "./context/CartContext";
import { ThemeProvider, createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <CartContext>
        <AuthContext>
          <ProductContext>
            <App />
            <MainPoutes />
          </ProductContext>
        </AuthContext>
      </CartContext>
  </BrowserRouter>
);
