import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
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

  const [page, setPage] = useState(1);
  const perPage = 5;
  const count = Math.ceil(state.data.length / perPage);
  function currentPage() {
    const begin = (page - 1) * perPage;
    const end = begin + perPage;
    return state.data.slice(begin,end)
  }

function setSearch(search){
  let res = state.data.filter((el) => el.name.toLowerCase().includes(search))
  dispatch({
    type: "GET",
    payload: res
  })
  if(!search){
    readProduct()
  }
}

  const values = {
    addProduct,
    readProduct,
    data: state.data,
    deleteProduct,
    getOneProduct,
    newObj: state.newObj,
    editProduct,
    setPage,
    currentPage,
    count,
    setSearch
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
