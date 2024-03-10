import { Alert, Box, Button, IconButton, TextField } from "@mui/material";
import React, { useReducer, useState } from "react";
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

  function handleChangeInput(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleClickButton() {
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
          height: "90vh",
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
            sx={{ width: "500px" }}
            onChange={handleChangeInput}
            error
            id="filled-error-helper-text"
            label="Book_Name"
            name="name"
            placeholder="Book_Name..."
            helperText="Incorrect entry."
            variant="filled"
            // type="text"
            // value={state.name}
            // onChange={handleNameChange}
          />
          <TextField
            onChange={handleChangeInput}
            sx={{ width: "500px" }}
            error
            name="price"
            id="filled-error-helper-text"
            label="Book_Price"
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
            label="Book_Author"
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
            label="Book_Type"
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
            label="Book_Image"
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
            label="Book_Annotation"
            placeholder="Book_Annotation..."
            helperText="Incorrect entry."
            variant="filled"
          />
        </Box>
        <Button
          sx={{ background: "bisque" }}
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
