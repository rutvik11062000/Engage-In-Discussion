import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Login from "./pages/login";
import Main from "./pages/main";
import Register from "./pages/register";
import Welcome from "./pages/Welcome";
import { AuthRoute, PrivateRoute } from "./util/AuthRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<PrivateRoute />} >
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/welcome" element={<AuthRoute />} >
            <Route path="/welcome" element={<Welcome />} />
          </Route>
          <Route path="/login" element={<AuthRoute />} >
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/register" element={<AuthRoute />} >
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </AuthProvider>
  );
}

export default App;
