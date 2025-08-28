import React from "react";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import ShopDetail from "./pages/shop/ShopDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetail/:itemid" element={<ShopDetail />} />
      </Routes>
    </>
  );
}

export default App;
