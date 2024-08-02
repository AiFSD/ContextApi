
import React, { createContext, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize cart with an empty array

  const addOrUpdateItem = (product, quantity) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
       
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity = quantity;
        return updatedCart;
      } else {
       
        return [...prevCart, { ...product, quantity }];
      }
    });
  };


  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };


  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addOrUpdateItem, removeItem, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};