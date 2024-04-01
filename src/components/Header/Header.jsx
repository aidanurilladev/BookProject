import React, { useEffect, useState } from "react";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useProduct } from "../../context/ProductContext";
import { useAuthContext } from "../../context/AuthContext";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { ADMIN } from "../../const/const";
import { useCartContext } from "../../context/CartContext";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

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
  const [modalActive, setModalActive] = useState(false);
  const { user, logOut } = useAuthContext();
  const { setSearch, sortByParams, sortByPrice, readBasket } = useProduct();
  const {card}= useCartContext()
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleMenuSort(event) {
    setOpenEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
    setOpenEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEl, setOpenEl] = useState(null);
  const [setMobileMoreAnchorEl] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const nav = useNavigate();

  useEffect(() => {
    readBasket();
  }, []);

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
                      onChange={(e) => setSearch(e.target.value)}
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
                      onClick={() => {
                        setModalActive(true);

                        handleClose();
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
                    <MenuItem
                      sx={{ color: "gray" }}
                      onClick={() => {
                        handleClose();
                        logOut();
                      }}
                    >
                      Выход
                    </MenuItem>
                  </Menu>

                  <IconButton
                    onClick={() => nav("/basket")}
                    sx={{
                      padding: "20px",
                      background: "white",
                      color: "#004B8D",
                    }}
                    aria-label="cart"
                  >
                    <StyledBadge badgeContent={card.products.length} color="secondary">
                      <ShoppingCartIcon sx={{ fontSize: "40px" }} />
                    </StyledBadge>
                  </IconButton>
                  {ADMIN.map((el) =>
                    user && el.email === user.email ? (
                      <IconButton
                        onClick={() => nav("/admin")}
                        sx={{
                          padding: "20px",
                          background: "white",
                          color: "#004B8D",
                        }}
                      >
                        <StyledBadge color="secondary">
                          <AdminPanelSettingsIcon sx={{ fontSize: "40px" }} />
                        </StyledBadge>
                      </IconButton>
                    ) : (
                      ""
                    )
                  )}

                  {user ? (
                    <>
                      <Tooltip title={user.displayName}>
                        <Avatar
                          sx={{ width: "17%", height: "82px" }}
                          src={user.photoURL}
                          alt={user.displayName}
                        />
                      </Tooltip>
                    </>
                  ) : (
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
                  )}
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
              <Link to="/infoForAuthor">
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
              <Box className="navbar_sort_box">
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="h6"
                  onClick={handleMenuSort}
                >
                 Сортировать <ExpandMoreIcon />{" "}
                </Typography>
                <Menu
                  id="menu-appbar"
                  anchorEl={openEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(openEl)}
                  onClose={handleClose}
                >
                  <FormControl sx={{ p: " 0 20px" }}>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      onChange={(e) => {
                        sortByParams("name", e.target.value);
                        sortByPrice(e.target.value);
                      }}
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="all"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        onClick={handleClose}
                        value="all"
                        control={<Radio />}
                        label="Все"
                      />
                      <FormControlLabel
                        onClick={handleClose}
                        value="a-z"
                        control={<Radio />}
                        label="А-Я"
                      />
                      <FormControlLabel
                        onClick={handleClose}
                        value="z-a"
                        control={<Radio />}
                        label="Я-А"
                      />
                      <FormControlLabel
                        onClick={handleClose}
                        value="high-low"
                        control={<Radio />}
                        label="Сначала дешевле"
                      />{" "}
                      <FormControlLabel
                        onClick={handleClose}
                        value="low-high"
                        control={<Radio />}
                        label="Сначала дороже"
                      />
                    </RadioGroup>
                  </FormControl>
                </Menu>
              </Box>
              {/* <FormGroup> */}
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              />
            </Box>
          </AppBar>
        </Box>
      </Box>
      <Hero active={modalActive} setActive={setModalActive} />;
    </>
  );
}
