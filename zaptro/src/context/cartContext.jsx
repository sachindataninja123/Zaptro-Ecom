import { createContext, useState } from "react";

export const cartContext = createContext(null);

export const cartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  return <cartContext.Provider>
    
  </cartContext.Provider>
};
