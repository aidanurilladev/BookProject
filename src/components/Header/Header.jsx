import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../../image/logo-book.jpg";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { Link, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const nav = useNavigate();

  return (
    <>
      <Box className="container">
        <Box>
          <AppBar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#DDE2E8",
            }}
          >
            <Toolbar>
              <Box className="header">
                <Box>
                  <img
                    onClick={() => nav("/")}
                    style={{ borderRadius: "50%" }}
                    width={130}
                    src={logo}
                    alt="logo"
                  />
                </Box>
                <Box>
                  <Search>
                    <SearchIconWrapper
                      sx={{
                        padding: "0.1px 20px",
                        background: "#1FA2C5",
                        position: "absolute",
                        right: "-65px",
                        borderRadius: "3px",
                      }}
                    >
                      <SearchIcon sx={{ fontSize: "30px" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      sx={{
                        width: "900px",
                        height: "55px",
                        color: "black",
                        borderRadius: "3px",
                        border: "1px solid white",
                        background: "#fff",
                      }}
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "500px",
                    gap: "20px",
                  }}
                >
                  <IconButton
                    onClick={handleMenu}
                    sx={{
                      padding: "20px",
                      background: "white",
                      color: "#004B8D",
                    }}
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge>
                      <LocalLibraryIcon sx={{ fontSize: "40px" }} />
                    </Badge>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      sx={{ color: "#1FA2C5" }}
                      onClick={()=>{
                      <Hero />
                      handleClose()

                      }}
                    >
                      Моя страницa
                    </MenuItem>
                    <MenuItem sx={{ color: "#1FA2C5" }} onClick={handleClose}>
                      Заказы
                    </MenuItem>
                    <MenuItem sx={{ color: "#1FA2C5" }} onClick={handleClose}>
                      Сообщение
                    </MenuItem>
                    <MenuItem sx={{ color: "#1FA2C5" }} onClick={handleClose}>
                      Друзья
                    </MenuItem>
                    <MenuItem sx={{ color: "gray" }} onClick={handleClose}>
                      Выход
                    </MenuItem>
                  </Menu>

                  <IconButton
                    sx={{
                      padding: "20px",
                      background: "white",
                      color: "#004B8D",
                    }}
                    aria-label="cart"
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCartIcon sx={{ fontSize: "40px" }} />
                    </StyledBadge>
                  </IconButton>
                  <IconButton
                    sx={{
                      padding: "20px",
                      background: "white",
                      color: "#004B8D",
                    }}
                    aria-label="cart"
                  >
                    <StyledBadge color="secondary">
                      <AccountCircleIcon sx={{ fontSize: "40px" }} />
                    </StyledBadge>
                  </IconButton>

                  <IconButton
                    onClick={() => nav("/admin")}
                    sx={{
                      padding: "20px",
                      background: "white",
                      color: "#004B8D",
                    }}
                  >
                    <StyledBadge color="secondary">
                      <CreateNewFolderIcon sx={{ fontSize: "40px" }} />
                    </StyledBadge>
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
            <Box className="navbarSort">
              <Link to="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  ГЛАВНАЯ
                </Typography>
              </Link>

              <Link to="/list">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  КНИГИ
                </Typography>
              </Link>
              <Link>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Я-АВТОР
                </Typography>
              </Link>
              <Link>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  КНИГИ ОПТОМ
                </Typography>
              </Link>
              <Link>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  ПРОДАЮ
                </Typography>
              </Link>
            </Box>
          </AppBar>
        </Box>
      </Box>
    </>
  );
}
