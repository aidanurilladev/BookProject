import axios from "axios";
import React, { createContext, useContext } from "react";
import { API } from "../const/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  const values = {
    addProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
