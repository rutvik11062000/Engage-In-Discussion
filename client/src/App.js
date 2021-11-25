import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/login";
import LoginNRegister from "./pages/LoginNRegister";
import Welcome from "./pages/Welcome";


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<LoginNRegister methodName="Register"/>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
