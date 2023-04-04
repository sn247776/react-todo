import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../assets/logo.png";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box className="logo">
        <img src={Logo} alt="logo" />
      </Box>

      {/* ICONS */}
      <Box>
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <a href="https://github.com/sn247776/Text-Champ" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
