import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../../image/logo-book.jpg";

const Footer = () => {
  return (
    <Box className="container">
      <Box className="footer">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#000",
              gap: "10px",
            }}
            variant="h5"
          >
            Каталог книг и подарков
          </Typography>
          <Typography variant="h6">Книги</Typography>
          <Typography variant="h6">Подарки и сувениры</Typography>
          <Typography variant="h6">Софт</Typography>
          <Typography variant="h6">Подарочные сертификаты и обложки</Typography>
          <Typography variant="h6">Живопись, современное искусство</Typography>
          <Typography variant="h6">Contemporary Art</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#000",
              gap: "10px",
            }}
            variant="h5"
          >
            Клиентам и партнерам
          </Typography>
          <Typography variant="h6">Пользовательское соглашение</Typography>
          <Typography variant="h6">Реклама на сайте</Typography>
          <Typography variant="h6">Обратная связь</Typography>
          <Typography variant="h6">Вакансии</Typography>
          <Typography variant="h6">Помощь</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#000",
              gap: "10px",
            }}
            variant="h5"
          >
            Контактная информация
          </Typography>
          <Typography variant="h6">Телефон в Бишкек:</Typography>
          <Typography variant="h6"> (0555) 40 02 39</Typography>
          <Typography variant="h6">Телефон в Ош:</Typography>
          <Typography variant="h6"> (0708) 17 12 32</Typography>
          <Button
            sx={{ width: "200px", color: "#000", fontWeight: "bold" }}
            variant="outlined"
          >
            Обратная связь
          </Button>
        </Box>
      </Box>
      <hr />
      <Box sx={{ padding: "40px 0" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "60px" }}>
          <img
            style={{ width: "170px", borderRadius: "50%" }}
            src={logo}
            alt=""
          />

          <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Typography>1996-2024 © Интернет-магазин книг. </Typography>
            <Typography>ООО "Издательство Символ-Плюс"</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;