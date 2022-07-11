import React from "react";
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
  Button as MuiButton,
} from "@mui/material";
import { MdOutlineMenu, MdAccountCircle } from "react-icons/md";

import Logo from "../../assets/projectLogo.png";

import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";

const pages = [
  { text: "Home", route: "/" },
  { text: "Quem somos", route: "about" },
  { text: "Contato", route: "contato" },
  { text: "Blog", route: "blog" },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const history = useHistory();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        background: "rgb(0, 0, 0)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgb(0, 0, 0)",
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
                  onClick={() => console.log(page.route)}
                >
                  <Typography textAlign="center" sx={{ color: "primary" }}>
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
              <Button
                variant="text"
                sx={{
                  color: "#04812e",
                  display: "block",
                }}
                onClick={() => history.push("/loginPartiner")}
              >
                Seja um parceiro
              </Button>

              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  color: "white",
                  display: "block",
                  backgroundColor: "#05732a",
                  "&:hover": {
                    bgcolor: "#04812e",
                  },
                }}
                onClick={() => history.push("/login")}
              >
                Entrar
              </Button>
            </Menu>
          </Box>
          <Box
            noWrap
            sx={{
              mr: 2,
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
          <Box
            noWrap
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton>
              <MdAccountCircle color="#FFF" />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, gap: 1 }}
          >
            <Button
              sx={{
                my: 3,
                color: "white",
                display: "block",
                border: "1px solid #0bda51",
                "&:hover": {
                  bgcolor: "#05732a",
                  border: "1px solid #05732a",
                },
              }}
              onClick={() => history.push("/loginPartiner")}
            >
              Seja um parceiro
            </Button>
            <Button
              variant="contained"
              sx={{
                my: 3,
                color: "white",
                display: "block",
                backgroundColor: "#05732a",
                border: "1px solid #05732a",
                "&:hover": {
                  bgcolor: "#04812e",
                  border: "1px solid #04812e",
                },
              }}
              onClick={() => history.push("/login")}
            >
              Entrar
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
