import {
  Alert,
  Box,
  Button,
  IconButton,
  TextField,
  colors,
} from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { addProduct } = useProduct();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    author: "",
    image: "",
    annotation: "",
    type: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    price: "",
    author: "",
    image: "",
    annotation: "",
    type: "",
  });

  function handleChangeInput(e) {
    const { name, value } = e.target;
    let errorMessage = "";

    if (value.trim() === "") {
      errorMessage = "Поле не может быть пустым";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleClickButton() {
    const errors = {};

    if (!product.name.trim()) {
      errors.name = "Введите название книги";
    }

    if (!product.price.trim()) {
      errors.price = "Введите цену книги";
    } else if (isNaN(product.price.trim())) {
      errors.price = "Цена должна быть числом";
    }

    if (!product.author.trim()) {
      errors.author = "Введите автора книги";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    addProduct(product);
  }

  const nav = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "80px 0 0 30px",
        }}
      >
        <IconButton onClick={() => nav("/")}>
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          height: "70vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          <TextField
            onChange={handleChangeInput}
            sx={{
              width: "500px",
            }}
            name="name"
            id="filled-error-helper-text"
            label="Book_Name"
            placeholder="Book_Name..."
            helperText={errors.name}
            variant="filled"
          />
          <TextField
            onChange={handleChangeInput}
            sx={{ width: "500px" }}
            name="price"
            id="filled-error-helper-text"
            label="Book_Price"
            placeholder="Book_Price..."
            helperText={errors.price}
            variant="filled"
          />
          <TextField
            onChange={handleChangeInput}
            sx={{ width: "500px" }}
            name="author"
            id="filled-error-helper-text"
            label="Book_Author"
            placeholder="Book_Author..."
            helperText={errors.author}
            variant="filled"
          />
          <TextField
            onChange={handleChangeInput}
            sx={{ width: "500px" }}
            name="type"
            id="filled-error-helper-text"
            label="Book_Type"
            placeholder="Book_Type..."
            helperText={errors.type}
            variant="filled"
          />
          <TextField
            onChange={handleChangeInput}
            sx={{ width: "500px" }}
            name="image"
            id="filled-error-helper-text"
            label="Book_Image"
            placeholder="Book_Image..."
            helperText={errors.image}
            variant="filled"
          />
          <TextField
            onChange={handleChangeInput}
            sx={{ width: "500px" }}
            name="annotation"
            id="filled-error-helper-text"
            label="Book_Annotation"
            placeholder="Book_Annotation..."
            helperText={errors.annotation}
            variant="filled"
          />
        </Box>
        <Button
          sx={{
            background: "bisque",
            padding: "12px 22px",
            fontWeight: "bold",
            fontSize: "16px",
            letterSpacing: "1.5px",
          }}
          onClick={handleClickButton}
          color="secondary"
        >
          Добавить
        </Button>
      </Box>
    </>
  );
};

export default Admin;
