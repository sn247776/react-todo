import axios from "axios";
import React, { useContext } from "react";
import { ColorModeContext } from "../theme";
import { Box, IconButton, useTheme, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from "../assets/logo.png";

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      alignItems="center"
    >
      <Box>
        <Link to={"/"} className="logo">
          <img src={Logo} alt="logo" />
        </Link>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <a href="https://github.com/sn247776/react-todo" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>

          {isAuthenticated ? (
            <Box>
              <Link to={"/profile"}>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
              </Link>
              <IconButton>
                <LogoutIcon disabled={loading} onClick={logoutHandler} />
              </IconButton>
            </Box>
          ) : (
            <Link to={"/login"}>
              <IconButton>
                <LoginIcon />
              </IconButton>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
