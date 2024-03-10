import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import imgGoogle from "../../image/image 1.png";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  const { register ,signUpWithGoogle} = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await register(email, password);
      nav("/");
    } catch (error) {
      setError(error.message);
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Typography
          sx={{
            color: "#1FA2C5",
          }}
          variant="h4"
        >
          Регистрация
        </Typography>

        <Box>
          <Typography
            sx={{
              padding: "15px 0",
            }}
          >
            Email Address
          </Typography>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            label="Email"
            variant="outlined"
            sx={{ padding: "10px 0", width: "400px" }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              padding: "15px 0",
            }}
          >
            Password
          </Typography>
          <FormControl
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            sx={{ width: "400px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Button
          onClick={handleSubmit}
          sx={{
            width: "400px",
            height: "50px",
            fontWeight: "bold",
            fontSize: "17px",
          }}
          variant="contained"
        >
          Sign Up
        </Button>
        <Typography>Вы можете войти с помощью соц.сетей</Typography>
        <Button
        onClick={()=>{
          nav("/")
          signUpWithGoogle()
        }}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "400px",
            height: "50px",
            fontWeight: "bold",
            fontSize: "20px",
            gap: "20px",
          }}
        >
          <img src={imgGoogle} alt="" />
          google
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
