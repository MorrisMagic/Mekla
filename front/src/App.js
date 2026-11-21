import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PacketsPage from "./pages/PacketsPage";
import Header from "./components/Header";
import MyOrderPage from "./pages/MyOrderPage";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  const [user, setuser] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const respone = await axios.post("http://localhost:8080/user");
      setuser(respone.data);
    }
    fetchdata();
  }, []);
  const { pathname } = useLocation();
  const HeaderCondintion = !["/login", "/signup"].includes(pathname);
  return (
    <>
      {HeaderCondintion ? <Header user={user} /> : ""}

      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to={"/"} /> : <SignupPage />}
        />
        <Route
          path="/packets"
          element={user ? <PacketsPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/myorder"
          element={user ? <MyOrderPage /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </>
  );
}

export default App;
