import { Box, Button, TextField, useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import TodoItem from "../components/TodoItem.jsx";

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const style = {
    color: "#CC861E",
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginX={2}
    >
      <form>
        <Box width="90vw" maxWidth="500px">
          <h1>Enter Your Task Details</h1>
          <TextField
            fullWidth
            variant="filled"
            type="title"
            label="Title"
            name="title"
            margin="normal"
            color="warning"
          />
          <TextField
            fullWidth
            variant="filled"
            type="description"
            label="Description"
            name="description"
            margin="normal"
            color="warning"
            multiline
            rows={4}
          />

          <Box display="flex" justifyContent="center" marginY={1}>
            <Button
              variant="contained"
              size="large"
              color="warning"
              endIcon={<SendIcon />}
            >
              Add Task
            </Button>
          </Box>
        </Box>
      </form>
      <Box>
        <TodoItem/>
        <TodoItem/>
      </Box>
    </Box>
  );
}

export default Home;
