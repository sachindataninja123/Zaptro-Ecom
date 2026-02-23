import { createContext, useContext, useState } from "react";

export const cartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  console.log(cartItem)

  const addToCart = (product) => {
    setCartItem((prev) => [...prev, product]);
  };

  return (
    <cartContext.Provider value={{ cartItem, setCartItem, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);