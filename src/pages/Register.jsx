import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";
import { Box, Button, TextField, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Register = () => {
  const style = {
    color: '#CC861E',
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
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
      setIsAuthenticated(false);
      setLoading(false);
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
      <h1>Enter Your Register Details</h1>
        <form onSubmit={submitHandler}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            value={name}
            margin="normal"
            label="Name"
            color="warning"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            
          />
          <TextField
            fullWidth
            variant="filled"
            label="Email"
            color="warning"
            type="email"
            placeholder="Email"
            required
            value={email}
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="filled"
            color="warning"
            type="password"
            required
            placeholder="Password"
            value={password}
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="warning" endIcon={<SendIcon />}>
              Sign Up
            </Button>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column">
          <h4>Or</h4>
          <p>Already have Account<a > <Link to="/login" className="link">Log In</Link></a></p>
          </Box>

        </form>
      </Box>
    </Box>
  );
};

export default Register;
