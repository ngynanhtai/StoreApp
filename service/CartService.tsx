import React, { useState } from "react";

const cart: any = [];

const AddToCart = (item: any) => {
  cart.push(item);
  return cart;
};
export { AddToCart };

const GetCart = () => {
  console.log("cart", cart);
  return cart;
};
export { GetCart };
