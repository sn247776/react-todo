import React from "react";
import { Box, Button, TextField, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { tokens } from "../theme.js";

const TodoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      width="90vw"
      maxWidth="700px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginY={1}
      backgroundColor={colors.grey[500]}
      padding={2}
    >
      <Box>
        <h3>{title}</h3>
        <p>{description}</p>
      </Box>
      <Box>
        <Checkbox
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
          size="large"
          color="warning"
        />
        <Button
          onClick={() => deleteHandler(id)}
          variant="contained"
          size="small"
          color="warning"
          endIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
