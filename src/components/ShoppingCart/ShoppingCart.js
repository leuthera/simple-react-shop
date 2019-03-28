import React, { useContext } from "react";
import Context from "../ContextProvider/Context";
import BookItem from "../BookList/BookItem/BookItem";
import ItemCounter from "./ItemCounter/ItemCounter";
import Formatter from "../../services/Formatter/Formatter";
import { removeLocalStorage } from "../../services/Storage/Storage";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { cart, change } = useContext(Context);

  const cartInfo = {
    sum: cart.reduce((acc, curr) => acc + curr.count * curr.book.price, 0),
    books: cart.map(item => ({ [item.book.isbn]: item.count })),
    currency: Formatter.resolvedOptions().currency
  };

  const checkout = () => {
    console.log(cartInfo);
  };

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
      <hr />
      <div className="text-right">
        Summe: <b>{Formatter.format(cartInfo.sum)}</b>
        <br />
        <button
          onClick={() => {
            checkout();
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
