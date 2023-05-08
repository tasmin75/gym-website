import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { AboutUs } from "./Pages/Aboutus/AboutUs";
import { Program } from "./Pages/Program/Program";
import { Training } from "./Pages/Training/Training";
import { Pricing } from "./Pages/Pricing/Pricing";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import Protected from "./Components/Protected/Protected";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Protected Cmp={Home }/>} />
        <Route path="/aboutus" element={< Protected Cmp={AboutUs} />} />
        <Route path="/program" element={< Protected Cmp={Program }/>} />
        <Route path="/training" element={< Protected Cmp={Training} />} />
        <Route path="/pricing" element={< Protected Cmp={Pricing} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
