import React, { useState, useEffect } from "react";
import Context from "./Context";
import {
  getLocalStorage,
  setLocalStorage
} from "../../services/Storage/Storage";

const ContextApp = props => {
  let storedCart = JSON.parse(getLocalStorage("cart") || "[]");
  const [cart, change] = useState(storedCart);

  useEffect(
    () => {
      setLocalStorage("cart", JSON.stringify(cart));
    },
    [cart]
  );

  return (
    <Context.Provider
      value={{
        cart,
        change
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextApp;
