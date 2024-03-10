export const API = `http://localhost:3000/data`;
export const API_BASKET = `http://localhost:3000/basket`;

export const ACTION_CARD = {
  GET_CARD: "GET_CARD",
};

export const calcTotalPrice = (product) => {
  return product.reduce((acc, el) => {
    return acc + el.subPrice;
  },0);
};

export const calcSubPrice = (product) => +product.count * +product.item.price;
