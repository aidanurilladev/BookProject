import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";

const Edit = () => {
  const { getOneProduct, newObj, editProduct } = useProduct();
  const nav = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    author: "",
    image: "",
    annotation: "",
    type: "",
  });
  useEffect(() => {
    if (newObj) {
      setProduct(newObj);
    }
  }, [newObj]);

  function handleChangeInput(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }
  function clickSave() {
    editProduct(id, product);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <TextField
          onChange={handleChangeInput}
          value={product.name}
          sx={{ width: "500px" }}
          id="filled-error-helper-text"
          name="name"
          label="name"
          placeholder="Book_Name..."
          variant="outlined"
        />
        <TextField
          onChange={handleChangeInput}
          value={product.price}
          sx={{ width: "500px" }}
          name="price"
          label="price"
          id="filled-error-helper-text"
          placeholder="Book_Price..."
          variant="outlined"
        />
        <TextField
          onChange={handleChangeInput}
          value={product.author}
          sx={{ width: "500px" }}
          name="author"
          label="author"
          id="filled-error-helper-text"
          placeholder="Book_Author..."
          variant="outlined"
        />
        <TextField
          onChange={handleChangeInput}
          value={product.type}
          sx={{ width: "500px" }}
          name="type"
          label="type"
          id="filled-error-helper-text"
          placeholder="Book_Type..."
          variant="outlined"
        />
        <TextField
          onChange={handleChangeInput}
          value={product.image}
          sx={{ width: "500px" }}
          name="image"
          id="filled-error-helper-text"
          placeholder="Book_Image..."
          variant="outlined"
          label="image"
        />
        <TextField
          onChange={handleChangeInput}
          value={product.annotation}
          sx={{ width: "500px" }}
          name="annotation"
          id="filled-error-helper-text"
          placeholder="Book_Annotation..."
          variant="outlined"
          label="annotation"
        />
        <Button
          onClick={() => {
            nav("/");
            clickSave();
          }}
          sx={{ background: "bisque", width: "300px" }}
          color="secondary"
        >
          Редактировать
        </Button>
      </Box>
    </Box>
  );
};

export default Edit;
