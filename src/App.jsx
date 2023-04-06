import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/TopBar";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Topbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
