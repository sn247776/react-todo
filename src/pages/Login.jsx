import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../main";
import { Box, Button, TextField, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { tokens } from "../theme.js";

const Login = () => {
  const style = {
    color: "colors.grey[500]"
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 100px)"
      marginX={2}
    >
      <Box width="90vw" maxWidth="500px">
      <h1>Enter Your Login Details</h1>
        <form onSubmit={submitHandler}>
          <TextField
            margin="normal"
            label="Email"
            color="warning"
            fullWidth
            variant="filled"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Password"
            color="warning"
            fullWidth
            variant="filled"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="warning"
              disabled={loading}
              endIcon={<SendIcon />}
            >
              Login{" "}
            </Button>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column">
          <h4>Or</h4>
          <p>Don't have Account <Link className="link" to="/register"> Create Account here</Link></p>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
