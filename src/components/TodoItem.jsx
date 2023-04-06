import React from 'react'
import { Box, Button, TextField, useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import Checkbox from '@mui/material/Checkbox';
import SendIcon from "@mui/icons-material/Send";
function TodoItem() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (

<Box width="100vw" maxWidth="700px" display="flex" justifyContent="space-between" marginY={5} backgroundColor={colors.grey[500]} padding={2} >
    <Box>
      <h3>Sample Task</h3>
      <p>this is just a sample task</p>
    </Box>
    <Box>
    <Checkbox size="large" color="warning"/>
    <Button
              variant="contained"
              size="small"
              color="warning"
              endIcon={<SendIcon />}
            >
              Delete
            </Button>
    </Box>
  </Box>

  )
}

export default TodoItem