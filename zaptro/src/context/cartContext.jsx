import { act, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const cartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  console.log(cartItem);

  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      const updateCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItem(updateCart);
      toast.success("Product quantity Increased");
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
      toast.success("Product is added to cart!");
    }
  };

  const updateQuantity = (cartItem, productId, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
              toast.success("Quantity is increased");
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
              toast.success("Quantity is decreased");
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null), //remove quantity 0 from cart
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
    toast.success("Product is deleted from Cart")
  };

  return (
    <cartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
