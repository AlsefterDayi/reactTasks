import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContextProvider";
import { addBasketRequest } from "../api/UserRequests";

export let BasketContext = createContext();
const BasketContextProvider = ({ children }) => {
  let { user } = useContext(UserContext);

  let [basket, setBasket] = useState([]);

  
  
  useEffect(() => {
    if (user) {
      setBasket(user?.basket);
    } else {
      setBasket([]);
    }
  }, [user]);
  
  useEffect(() => {
    if (user && user.id) {
      addBasketRequest(user?.id, basket);
      console.log(user, "user");
    }
  }, [basket, user]);

  function addBasket(id) {
    let find = basket.find((item) => item.id === id);
    if (find) {
      find.quantity++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { id, quantity: 1 }]);
    }
  }
  let data = { basket, setBasket, addBasket };

  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
};

export default BasketContextProvider;
