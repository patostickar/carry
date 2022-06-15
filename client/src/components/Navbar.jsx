import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Grid,
  Button,
  Avatar,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import logo from "../assets/logo.png";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import styles from "./styles/Navbar.module.css";

export default function Navbar() {
  const { img, firstName, lastName, isAdmin } = useSelector(
    (state) => state.user
  );
  const [selectedItem, setSelectedItem] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();
  const navigate = useNavigate();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const GoToAdmin = () => {
    navigate("/AdminPanel");
  };
  const handleChange = (event, newValue) => {
    setSelectedItem(newValue);
  };

  return (
    <AppBar
      color="transparent"
      sx={{
        height: 80,
        position: "relative",
        "z-index": "1",
      }}
    >
      <Toolbar>
        <Link to="/">
          <Box
            component="img"
            sx={{ height: 80, width: 90, marginRight: "0.5rem" }}
            alt="Your logo."
            src={logo}
          />
        </Link>

        <Tabs
          value={selectedItem}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value={0} label="INICIO" to="/" component={Link} />
          <Tab value={1} label="NOSOTROS" to="/about" component={Link} />
        </Tabs>
        {!isAuthenticated && !isLoading ? (
          <Grid
            sx={{ marginLeft: "auto" }}
            onClick={() =>
              loginWithRedirect({
                appState: {
                  returnTo: window.location.pathname,
                },
              })
            }
            variant="contained"
          >
            <div className={styles.ingresar}>
              <Button variant="contained">INGRESAR</Button>
            </div>
          </Grid>
        ) : (
          <>
            <Avatar
              alt="Remy Sharp"
              sx={{ marginLeft: "auto" }}
              src={img}
              to="/profile"
              component={Link}
            />

            <Tooltip title="Account settings">
              <MenuIcon
                onClick={handleClick}
                fontSize="large"
                sx={{ marginLeft: "10px" }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              />
            </Tooltip>
          </>
        )}

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem to="/profile" component={Link}>
            <Avatar src={img} /> {firstName} {lastName}
          </MenuItem>
          {isAdmin && (
            <MenuItem onClick={GoToAdmin}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              Administrar
            </MenuItem>
          )}
          <Divider />
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Salir
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
