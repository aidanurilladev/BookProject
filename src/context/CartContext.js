import React, { createContext, useContext, useReducer } from "react";
import { ACTION_CARD, calcSubPrice, calcTotalPrice } from "../const/const";
import axios from "axios";

const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

const INIT_STATE = {
  card: JSON.parse(localStorage.getItem("books")),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_CARD.GET_CARD:
      return { ...state, card: action.payload };

    default:
      return state;
  }
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToCard(product) {
    let card = JSON.parse(localStorage.getItem("books"));
    if (!card) {
      card = {
        products: [],
        totalPrice: 0,
      };
    }
    const newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    card.products.push(newProduct);
    card.totalPrice = calcTotalPrice(card.products);
    localStorage.setItem("books", JSON.stringify(card));
  }

  function checkProductInCard(id) {
    let card = JSON.parse(localStorage.getItem("books"));
    if (card) {
      let obj = card.products.find((el) => el.item.id === id);
      return obj ? true : false;
    }
  }
  function readProductFromCard() {
    let card = JSON.parse(localStorage.getItem("books"));
    if (!card) {
      localStorage.setItem(
        "books",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
    }
    dispatch({
      type: ACTION_CARD.GET_CARD,
      payload: card,
    });
  }
  function deleteProductInCard(id) {
    let card = JSON.parse(localStorage.getItem("books"));
    card.products = card.products.filter((el) => el.item.id !== id);
    card.totalPrice = calcTotalPrice(card.products);
    localStorage.setItem("books", JSON.stringify(card));
    readProductFromCard();
  }

  function changeProductCount(count, id) {
    if (count < 1) {
      alert("error");

      return;
    }
    let card = JSON.parse(localStorage.getItem("books"));
    card.products = card.products.map((el) => {
      if (el.item.id === id) {
        el.count = count;
        el.subPrice = calcSubPrice(el);
      }
      return el;
    });

    card.totalPrice = calcTotalPrice(card.products);
    localStorage.setItem("books", JSON.stringify(card));
    readProductFromCard();
  }

  const TOKEN = `6625212528:AAFY_aIoFfJRr3-S96XDtjjNhcsWBeatTdk`;
  const MY_ID = `-1002052462333`;
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  async function sendProductFromTelegram(product) {
    let values = `Заказ:\n`;
    product.map((el) => {

      values += `${el.item.image}\n`;
      values += `Название \n`
      values += `${el.item.name}\n`;
      values += `Цена \n`

      values += `${el.item.price}\n`;
      values += `Кол-во ${el.count}\n`;
    });
    const newObject = {
      chat_id: MY_ID,
      parse_model: "html",
      text: values,
    };
    await axios.post(URL_API, newObject);
  }
  const values = {
    addProductToCard,
    checkProductInCard,
    card: state.card,
    readProductFromCard,
    changeProductCount,
    deleteProductInCard,
    sendProductFromTelegram,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContext;
