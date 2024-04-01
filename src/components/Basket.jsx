import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../context/CartContext";

const Basket = () => {
  const { basket, readBasket } = useProduct();
  const { readProductFromCard, card, changeProductCount,deleteProductInCard ,sendProductFromTelegram} = useCartContext();

  const nav = useNavigate();

  useEffect(() => {
    readBasket();
    readProductFromCard();
  }, []);

  return (
    <Box className="container">
      <Box
        sx={{
          position: "sticky",
          top: "0",
          zIndex: "1",
          background: "#fff",
          padding: "60px 0 20px 0 ",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography variant="h3">Ваша корзина</Typography>

        <Button onClick={() => nav("/list")}>
          <Typography variant="p" fontSize={16}>
            Продолжить покупки
          </Typography>
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <Typography>ПРОДУКТЫ</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "500px",
            }}
          >
            <Typography>ЦЕНА</Typography>
            <Typography>КАЧЕСТВА</Typography>
            <Typography>ОБЩИЙ</Typography>
          </Box>
        </Box>
        <Box width={"70%"}>
          <hr />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          padding: "20px 0",
        }}
      >
        {card.products.map((el, idx) => (
          <Box key={idx} className="card_box">
            <img width={140} src={el.item.image} alt="book" />
            <Box>
              <Typography width={100}>{el.item.name}</Typography>
              <DeleteIcon sx={{
                color:"red"
              }} onClick={()=>deleteProductInCard(el.item.id)}  />
            </Box>
            <Typography>{el.item.price} c</Typography>
            <input
              onChange={(e) => changeProductCount(e.target.value, el.item.id)}
              type="number"
              name=""
              value={el.count}
              id=""
            />
            <Typography>{el.subPrice} </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "sticky",
          bottom: "0px",
          zIndex: "1",
          background: "#fff",
          padding: "20px 0 ",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box width={"70%"}>
          <hr />
        </Box>
        <Box
          sx={{
            padding: "40px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Typography>ИТОГО: {card.totalPrice}</Typography>
          <Button
          onClick={()=>sendProductFromTelegram(card.products)}
            sx={{
              width: "100px",
            }}
            variant="contained"
          >
            {" "}
            КУПИТЬ
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Basket;
