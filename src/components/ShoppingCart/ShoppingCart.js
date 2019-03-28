import React, { useContext } from "react";
import Context from "../ContextProvider/Context";
import BookItem from "../BookList/BookItem/BookItem";
import ItemCounter from "./ItemCounter/ItemCounter";
import { removeLocalStorage } from "../../services/Storage/Storage";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { cart, change } = useContext(Context);
  return (
    <div>
      <h2>ShoppingCart</h2>
      <button
        onClick={() => {
          removeLocalStorage("cart");
          change([]);
        }}
      >
        Clear all
      </button>
      <ul className="cart-list">
        {cart.map((element, index) => (
          <li key={Math.random()}>
            <span className="item-counter">
              <ItemCounter book={element.book} count={element.count} />
            </span>
            <BookItem book={element.book} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
