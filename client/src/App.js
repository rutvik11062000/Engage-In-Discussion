import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Welcome from "./pages/Welcome";


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
