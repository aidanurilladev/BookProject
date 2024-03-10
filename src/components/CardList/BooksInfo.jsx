import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const BooksInfo = () => {
  const { newObj, getOneProduct, addBasketCart, basket, changeToBasket } =
    useProduct();
  const { addProductToCard,checkProductInCard } = useCartContext();
  const nav = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <Box className="container">
      <Box className="book_block">
        <Box className="book_card">
          <img width={500} src={newObj.image} alt="" />
          <Box className="info_card">
            <Typography
              sx={{
                fontWeight: "bold",
              }}
              variant="h3"
            >
              {newObj.name}
            </Typography>
            <Typography letterSpacing={"5px"}>{newObj.author}</Typography>
            <Typography variant="h5" fontWeight={"bold"} color={"red"}>
              {newObj.price} c{" "}
            </Typography>
            {checkProductInCard(newObj.id) ? (
              <>
                <Button onClick={() => nav("/basket")} variant="outlined">
                  Перейти в корзину
                </Button>
                <Button
                  disabled
                  sx={{
                    width: "300px",
                  }}
                  variant="contained"
                  >
                  ДОБАВИТЬ В КОРЗИНУ
                </Button>
              </>
            ) : (
              <>
               <Button onClick={() => nav("/basket")} variant="outlined">
                  Перейти в корзину
                </Button>
                <Button
              onClick={() => {
                addProductToCard(newObj);
              }}
                  sx={{
                    width: "300px",
                  }}
                  variant="contained"
                >
                  ДОБАВИТЬ В КОРЗИНУ
                </Button>
              </>
            )}
          </Box>
        </Box>
        <Box>
          <hr />
          <Typography fontWeight={"bold"} variant="h5" p={"20px 0"}>
            {" "}
            Аннотация к книге "{newObj.name}"
          </Typography>
          <Typography
            sx={{
              width: "700px",
            }}
          >
            {newObj.annotation}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BooksInfo;
