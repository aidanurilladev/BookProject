import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const InfoForAuthor = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: "50px 100px",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          gap: "25px",
          background: "#fff",
          border: "1px solid gray",
          height: "500px",
        }}
      >
        <Typography variant="h5">Написали книгу? Поздравляем!</Typography>
        <Typography variant="h6">
          Вы написали книгу и хотите ее издать и продавать? Мы можем помочь.
        </Typography>
        <Box>
          <Typography p={"10px 0"} variant="h6">
            Что мы предлагаем:
          </Typography>
          <ul style={{
            display:"flex",justifyContent:"start",flexDirection:"column",
            gap:"15px"
          }}>
            <li>
              
              подготовка книги с присвоением ISBN в России, Эстонии или Израиле
            </li>
            <li>печать книги в России, Польше или Израиле</li>
            <li>продажа книги на Books.ru и Amazon</li>
            <li>реклама книги среди 1 миллиона наших клиентов</li>
          </ul>
        </Box>
        <Typography variant="h6">
          Для того, чтобы обсудить вашу книгу и получить предложение, свяжитесь
          с нами.
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Link to="/signIn">зарегистрируйтесь</Link>{" "}
          <span
            style={{
              marginLeft: "-70px",
            }}
          >
            на Books.ru
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoForAuthor;
