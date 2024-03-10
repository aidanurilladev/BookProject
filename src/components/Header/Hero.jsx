import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = ({ active, setActive }) => {
  return (
    <Box
      onClick={() => setActive(false)}
      className={active ? "modal_active" : "modal_window"}
    >
      <Box onClick={(e) => e.stopPropagation()} className="modal_content">
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
