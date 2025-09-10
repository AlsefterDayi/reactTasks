import React from "react";
import UserContextProvider from "../context/UserContextProvider";
import ProductsContextProvider from "../context/ProductContextProvider";

function MainProvider({ children }) {
  return (
    <UserContextProvider>
      <ProductsContextProvider>{children}</ProductsContextProvider>
    </UserContextProvider>
  );
}

export default MainProvider;
