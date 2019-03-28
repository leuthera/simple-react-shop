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
    return cart => {
      const structured_cart = cart.map(item => {
        if (item.book) {
          return item;
        } else {
          return {
            book: item,
            count: 1
          };
        }
      });

      const grouped_cart = Object.values(
        _.groupBy(structured_cart, "book.isbn")
      ).map(group => {
        const count = group.length > 1 ? group[0].count + 1 : group[0].count;
        return {
          ...group[0],
          count
        };
      });

      changeFn(grouped_cart);
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
