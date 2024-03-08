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

const SignIn = () => {
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
            sx={{
              width: "400px",
              color: "#181818",
              fontWeight: "bold",
              height: "50px",
              fontSize: "19px",
            }}
            variant="outlined"
          >
            Primary
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
