import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PacketsPage from "./pages/PacketsPage";
import Header from "./components/Header";
function App() {
  const { pathname } = useLocation();
  const HeaderCondintion = !["/login", "/signup"].includes(pathname);
  return (
    <>
      {HeaderCondintion ? <Header /> : ""}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/packets" element={<PacketsPage />} />
      </Routes>
    </>
  );
}

export default App;
