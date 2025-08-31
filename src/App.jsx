import React from "react";
import Header from "./components/Header";
import Shop from "./Modules/Shop/View/Shop";
import Home from "./Modules/home";
import { Routes, Route } from "react-router-dom";
import ShopDetail from "./Modules/Shop/View/Shopdetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shopdetail/:itemid" element={<ShopDetail />} />
      </Routes>
    </>
  );
}

export default App;
