import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Category from "./Category";
import Home from "./Home";
import Categorydetails from "./Categorydetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<Categorydetails />} />
      </Route>
    </Routes>
  );
}

export default App;
