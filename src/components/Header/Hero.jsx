import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal();
  }, []);
  return (
    <Box
      sx={{
        display:  showModal? "none"   : "flex",
        justifyContent: "center",
        alignItems: "center",
        // backdropFilter: "blur (10px)",
      }}
      className="modal_window"
    >
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
