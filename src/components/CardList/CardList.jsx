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

const CardList = () => {
  const { readProduct, data, deleteProduct } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);
  const nav = useNavigate();
  return (
    <Box
      sx={{
        padding: "50px ",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {data.map((el, index) => (
          <Card key={index} sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{
                padding: "20px",
                width: "250px ",
                height: 300,
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
        ))}
      </Box>
    </Box>
  );
};

export default CardList;
