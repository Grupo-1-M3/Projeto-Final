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
} from "@mui/material";
import { MdOutlineMenu } from "react-icons/md";

import Logo from "../../assets/projectLogo.png";

import { useHistory } from "react-router-dom";
import { useState } from "react";

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
        background: "linear-gradient(var(--background-header-home), var(--background-home))",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="Logo"
            src={Logo}
            sx={{ width: 56, height: 56, display: { xs: "none", md: "flex" } }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, }}>
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
                  <Typography textAlign="center" sx={{ color: "primary", }}>
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
