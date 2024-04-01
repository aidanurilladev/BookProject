import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API, API_BASKET } from "../const/const";
import { useLocation, useNavigate } from "react-router-dom";

const INIT_STATE = {
  data: [],
  newObj: {},
  basket: [],
};

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    case "GET_ONE":
      return { ...state, newObj: action.payload };
    case "GET_BASKET":
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! CRUD
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  async function readProduct() {
    const { data } = await axios(`${API}/${window.location.search}`);
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

  // ! CRUD
  // TODO PAGINATION
  const [page, setPage] = useState(1);
  const perPage = 10;
  const count = Math.ceil(state.data.length / perPage);
  function currentPage() {
    const begin = (page - 1) * perPage;
    const end = begin + perPage;
    return state.data.slice(begin, end);
  }
  // TODO PAGINATION
  // ! SEARCH

  function setSearch(search) {
    let res = state.data.filter((el) => el.name.toLowerCase().includes(search));
    dispatch({
      type: "GET",
      payload: res,
    });
    if (!search) {
      readProduct();
    }
  }
  // ! SEARCH
  // ! SORT BY PARAMS

  const sortByParams = async (query, value) => {
    if (value === "all") {
      readProduct();
    } else if (value === "a-z") {
      const result = state.data.sort((a, b) => a.name.localeCompare(b.name));
      dispatch({
        type: "GET",
        payload: result,
      });
    } else if (value === "z-a") {
      const res = state.data.sort((a, b) => b.name.localeCompare(a.name));
      dispatch({
        type: "GET",
        payload: res,
      });
    }
  };
  // ! SORT BY PARAMS
  // ? Sort  By Price

  function sortByPrice(value) {
    if (value === "all") {
      readProduct();
    } else if (value === "high-low") {
      const res = state.data.sort((a, b) => +a.price - +b.price);
      dispatch({
        type: "GET",
        payload: res,
      });
    } else if (value === "low-high") {
      const res = state.data.sort((a, b) => +b.price - +a.price);
      dispatch({
        type: "GET",
        payload: res,
      });
    }
  }
  // ? Sort  By Price

  async function addBasketCart(order) {
    await axios.post(API_BASKET, order);
  }
  async function readBasket() {
    let { data } = await axios(API_BASKET);
    dispatch({
      type: "GET_BASKET",
      payload: data,
    });
  }

  function changeToBasket(id) {
    if (state.basket) {
      const res = state.basket.some((el) => el.id === id);
      return !res;
    }
    readBasket();
  }

  // ? DARK MODE

  // ? DARK MODE

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
    setSearch,
    sortByParams,
    sortByPrice,
    addBasketCart,
    readBasket,
    basket: state.basket,
    changeToBasket,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
