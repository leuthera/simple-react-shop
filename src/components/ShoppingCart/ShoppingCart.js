import React, { useContext } from "react";
import Context from "../Context/Context";
import BookItem from "../BookList/BookItem/BookItem";
import { removeLocalStorage } from "../../services/Storage/Storage";

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
        reset
      </button>
      {cart.map((book, index) => (
        <BookItem key={Math.random()} book={book} index={index} />
      ))}
    </div>
  );
}

export default ShoppingCart;
