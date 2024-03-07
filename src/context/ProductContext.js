import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../const/const";

const INIT_STATE = {
  data: [],
  newObj: {},
};

export const useProduct = () => useContext(productContext);
const productContext = createContext();

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    case "GET_ONE":
      return { ...state, newObj: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  async function readProduct() {
    const { data } = await axios(API);
    dispatch({ type: "GET", payload: data });
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: data,
    });
  }
  async function editProduct(id, newObj) {
    await axios.patch(`${API}/${id}`, newObj);
    readProduct();
  }
  const values = {
    addProduct,
    readProduct,
    data: state.data,
    deleteProduct,
    getOneProduct,
    newObj: state.newObj,
    editProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
