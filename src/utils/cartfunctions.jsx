// CartFunctions.js

import { useState, useEffect } from "react";
import { client } from "../services/userAuthApis"; // Import your API client

const useCartFunctions = (initialCart = []) => {
  const [cart, setCart] = useState(initialCart);
  const [totalPrice, setTotalPrice] = useState(0.00);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  

  const getCartPrice = async (cartItems) => {
    const data = {
      user: localStorage.getItem("access_token"),
      cart_items: cartItems,
    };
    try {
      setLoading(true);
      const response = await client.post("cart/cart", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Cart price data:", response.data);
      setTotalPrice(response.data.total_cost);
      setCart(response.data.cart_products);
      console.log("Set total price");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateCart = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCart(cartItems);
    setIsEmpty(cartItems.length === 0);
    getCartPrice(cartItems);
  };

  const addToCart = (id, quantity) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity = quantity;
    } else {
      cartItems.push({ id, quantity });
    }

    updateCart(cartItems);
  };

  const removeFromCart = (id) => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      cartItems.splice(existingItemIndex, 1);
      updateCart(cartItems);
    } else {
      console.log("Item with ID", id, "is not in the cart.");
    }
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length !== 0) {
      setIsEmpty(false);
      setCart(cartItems);
      getCartPrice([...cart, ...cartItems]);
    } else {
      setIsEmpty(true);
      setCart([]);
    }
  }, []);

  return {
    cart,
    totalPrice,
    loading,
    isEmpty,
    addToCart,
    removeFromCart,
  };
};

export default useCartFunctions;
