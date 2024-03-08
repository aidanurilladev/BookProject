import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box className="modal_window">
      <Box className="modal_block">
        <Box
          sx={{
            display: "flex",
            width: "300px",
          }}
        >
          <Link to={"/signIn"}>
            <Typography>Войти</Typography>
          </Link>
          <Typography sx={{ marginLeft: "-50px" }}>или</Typography>
          <Link to={"/signUp"}>
            <Typography>зарегистрироваться</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
