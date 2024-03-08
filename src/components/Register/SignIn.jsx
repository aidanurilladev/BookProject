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
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signIn } = useAuthContext();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function clickSignIn() {
    try {
      await signIn(email, password);
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
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <Typography
          sx={{ textAlign: "center", color: "blueviolet" }}
          variant="h4"
        >
          Sign In
        </Typography>
        <Box>
          <Typography
            sx={{
              padding: "15px 0",
            }}
          >
            Email
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
        <Box>
          <Button
            onClick={() => {
              clickSignIn();
              nav("/");
            }}
            sx={{
              width: "400px",
              color: "#181818",
              fontWeight: "bold",
              fontSize: "19px",
            }}
            variant="outlined"
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
