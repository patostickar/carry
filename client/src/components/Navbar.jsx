import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
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
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
   
  const { isAuthenticated, user, loginWithRedirect, logout } =  useAuth0();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
      console.log(newValue);
    setSelectedItem(newValue);
  };

 

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Box component="img" sx={{ height: 64 }} alt="Your logo." src={logo} />
        <Tabs value={selectedItem} onChange={handleChange} aria-label="wrapped label tabs example">
        <Tab value={0} label="HOME" />
        <Tab value={1} label="BOOKING" />
        <Tab value= {2} label="LOCATIONS" />
      </Tabs>
        
        
        
        
        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          REGISTER
        </Button>

        {!isAuthenticated ? (
          <Button
            onClick={loginWithRedirect}
            variant="contained"
            sx={{ marginLeft: "10px" }}
          >
            LOGIN
          </Button>
        ) : (
          <>
            <Avatar
              alt="Remy Sharp"
              sx={{ marginLeft: "10px" }}
              src={user?.picture}
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
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
