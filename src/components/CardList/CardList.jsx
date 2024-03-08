import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";
import PaginationCard from "../Pagination/PaginationCard";

const CardList = () => {
  const { readProduct, data, deleteProduct, currentPage } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);
  const nav = useNavigate();
  return (
    <Box id="card_list">
      <Box className="container">
        <Typography
          sx={{
            color: "#1FA2C5",
            fontWeight: "bold",
          }}
          variant="h4"
        >
          Бестселлеры
        </Typography>
        <Box className="card_list">
          {data.length ? (
            currentPage().map((el, index) => (
              <Card key={index} sx={{ maxWidth: 300 }}>
                <CardMedia
                  sx={{
                    padding: "20px",
                    width: "250px ",
                    height: "250px",
                  }}
                  image={el.image}
                  title="book"
                />
                <CardContent>
                  <Typography
                    sx={{
                      color: "blue",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {el.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {el.author}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                    variant="body1"
                    color="#000"
                  >
                    {el.price} C{" "}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Button onClick={() => deleteProduct(el.id)}>
                    <DeleteIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </Button>
                  <Button onClick={() => nav(`/edit/${el.id}`)}>
                    <EditNoteIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </Button>
                </CardActions>
                <Box
                  sx={{
                    textAlign: "center",
                    p: "25px",
                  }}
                >
                  <Button
                    sx={{
                      width: "100%",
                      background: "#1FA2C5",
                      color: "#fff",
                    }}
                    variant="contained"
                  >
                    В корзину
                  </Button>
                </Box>
              </Card>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          padding: "30px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PaginationCard />
      </Box>
    </Box>
  );
};

export default CardList;
