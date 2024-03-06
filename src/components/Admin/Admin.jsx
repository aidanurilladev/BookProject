import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";

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

  function handleChangeInput(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleClickButton() {
    addProduct(product);
  }

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "50px",
        height: "60vh",
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
          sx={{ width: "500px" }}
          error
          id="filled-error-helper-text"
          label="Error"
          name="name"
          placeholder="Book_Name..."
          helperText="Incorrect entry."
          variant="filled"
        />
        <TextField
          onChange={handleChangeInput}
          sx={{ width: "500px" }}
          error
          name="price"
          id="filled-error-helper-text"
          label="Error"
          placeholder="Book_Price..."
          helperText="Incorrect entry."
          variant="filled"
        />
        <TextField
          onChange={handleChangeInput}
          sx={{ width: "500px" }}
          error
          name="author"
          id="filled-error-helper-text"
          label="Error"
          placeholder="Book_Author..."
          helperText="Incorrect entry."
          variant="filled"
        />
        <TextField
          onChange={handleChangeInput}
          sx={{ width: "500px" }}
          error
          name="type"
          id="filled-error-helper-text"
          label="Error"
          placeholder="Book_Type..."
          helperText="Incorrect entry."
          variant="filled"
        />
        <TextField
          onChange={handleChangeInput}
          sx={{ width: "500px" }}
          error
          name="image"
          id="filled-error-helper-text"
          label="Error"
          placeholder="Book_Image..."
          helperText="Incorrect entry."
          variant="filled"
        />
        <TextField
          onChange={handleChangeInput}
          sx={{ width: "500px" }}
          error
          name="annotation"
          id="filled-error-helper-text"
          label="Error"
          placeholder="Book_Annotation..."
          helperText="Incorrect entry."
          variant="filled"
        />
      </Box>
      <Button
        sx={{ background: "gray" }}
        onClick={handleClickButton}
        color="secondary"
      >
        Добавить
      </Button>
    </Box>
  );
};

export default Admin;
