import {
  Box,
  Button,
  TextField,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme.js";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

function Register() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const style = {
    color: '#CC861E',
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 100px)"
      marginX={2}
      
    >
      <form>
        <Box width="90vw" maxWidth="500px">
          <h1>Enter Your Register Details</h1>
          <TextField
            fullWidth
            variant="filled"
            type="name"
            label="Name"
            name="name"
            margin="normal"
            color="warning"
            
          />
          <TextField
            fullWidth
            variant="filled"
            type="email"
            label="Email"
            name="email"
            margin="normal"
            color="warning"
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Password"
            name="password"
            margin="normal"
            color="warning"
          />
          <Box display="flex"
      justifyContent="center" marginY={1}>
          <Button variant="contained" color="warning" endIcon={<SendIcon />} >
        Register
      </Button>
          </Box>
      <p>Already have Account<a style={style}> Login here</a></p>
        </Box>
      </form>
    </Box>
  );
}

export default Register;
