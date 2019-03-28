import React, { useState, useEffect } from "react";
import _ from "lodash";
import Context from "./Context";
import {
  getLocalStorage,
  setLocalStorage
} from "../../services/Storage/Storage";

const ContextApp = props => {
  let storedCart = JSON.parse(getLocalStorage("cart") || "[]");
  const [cart, change] = useState(storedCart);

  const changeInterceptor = changeFn => {
    return cart_obj => {
      const new_cart = cart_obj.map(cart_element => {
        if (cart_element.book) {
          return cart_element;
        } else {
          return {
            book: cart_element,
            count: 0
          };
        }
      });

      changeFn(new_cart);
    };
  };

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
        change: changeInterceptor(change)
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextApp;
