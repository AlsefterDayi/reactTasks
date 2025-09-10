import React from "react";
import Header from "./components/Header";
import Shop from "./Modules/Shop/View/Shop";
import Home from "./Modules/home";
import { Routes, Route } from "react-router-dom";
import ShopDetail from "./Modules/Shop/View/Shopdetail";
import MainProvider from "./providers/MainProvider";
import { Toast } from "bootstrap";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <MainProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shopdetail/:itemid" element={<ShopDetail />} />
        </Routes>
      </MainProvider>
    </>
  );
}

export default App;
