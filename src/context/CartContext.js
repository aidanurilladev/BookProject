import React, { createContext, useContext, useReducer } from "react";
import { ACTION_CARD, calcSubPrice, calcTotalPrice } from "../const/const";
import { FormatAlignJustify } from "@mui/icons-material";

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

    function changeProductCount(count, id){

      if(count < 1){
        alert("error")

        return
      } 
      let card = JSON.parse(localStorage.getItem("books"));
      card.products = card.products.map((el)=> {
        if(el.item.id === id){
          el.count = count
          el.subPrice = calcSubPrice(el)
        }
        return el
      })

      card.totalPrice = calcTotalPrice(card.products)
      localStorage.setItem("books",JSON.stringify(card))
      readProductFromCard()


    }
  const values = { 
    addProductToCard,
     checkProductInCard ,
     card: state.card,
      readProductFromCard,
      changeProductCount,
      deleteProductInCard };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContext;
