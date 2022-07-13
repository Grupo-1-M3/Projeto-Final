import React, { useContext } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  AppBar,
  Avatar,
  Badge,
  Divider,
} from "@mui/material";
import { MdOutlineMenu, MdSearch, MdLogout } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

import Logo from "../../assets/projectLogo.png";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "../../contexts/Cart";

const pages = [
  { text: "Home", route: "/" },
  { text: "Quem somos", route: "about" },
  { text: "Contato", route: "contato" },
  { text: "Blog", route: "blog" },
  {text: "Vitrine", route: "vitrine"}
];

const SearchNavBar = ({ isCart = false, handleSearch }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const history = useHistory();
  const { productsOnCart } = useContext(CartContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout = () => {
    localStorage.removeItem("@TrashNoFood:token");
    localStorage.removeItem("@TrashNoFood:id");
    history.push("/");
  };
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        background:
          "linear-gradient(var(--background-header-home), var(--background-home))",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="Logo"
            src={Logo}
            sx={{ width: 56, height: 56, display: { xs: "none", md: "flex" } }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MdOutlineMenu color="#FFF" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.text}
                  onClick={() => history.push(`${page.route}`)}
                >
                  <Typography
                    textAlign="center"
                    sx={{ color: "primary", width: "100%" }}
                  >
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem>
                <Button
                  onClick={() => history.push("/cart")}
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--color-button-home)",
                    "&:hover": {
                      backgroundColor: "var(--color-button-home-hover)",
                    },
                  }}
                  startIcon={<IoCartSharp color="#FFF" />}
                >
                  <Badge
                    badgeContent={productsOnCart ? productsOnCart.length : 0}
                    color="primary"
                    sx={{ cursor: "pointer" }}
                  >
                    Carrinho
                  </Badge>
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="contained"
                  onClick={logout}
                  sx={{
                    backgroundColor: "var(--color-button-home)",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: "var(--color-button-home-hover)",
                    },
                  }}
                  startIcon={<MdLogout />}
                >
                  Sair
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            noWrap
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Avatar
              alt="Logo"
              src={Logo}
              sx={{ width: 56, height: 56, cursor: "pointer" }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={() => history.push(`${page.route}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          {isCart ? (
            <></>
          ) : (
            <Box sx={{ flexGrow: 1, maxWidth: "380px", width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MdSearch color="#ededed" />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{
                    width: "100%",
                    color: "#fff",
                    "&:focus": {
                      border: "1px solid #e5e5e5",
                    },
                  }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={handleSearch}/>
              </Search>
            </Box>
          )}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <IconButton onClick={() => history.push("/cart")}>
              <Badge
                badgeContent={productsOnCart ? productsOnCart.length : 0}
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                <IoCartSharp color="#FFF" />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={logout}
              variant="contained"
              sx={{
                backgroundColor: "var(--color-button-home)",
                "&:hover": {
                  backgroundColor: "var(--color-button-home-hover)",
                },
              }}
              startIcon={<MdLogout />}
            >
              Sair
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SearchNavBar;
