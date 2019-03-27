import React, { useContext } from "react";
import Context from "../Context/Context";
import BookItem from "../BookList/BookItem/BookItem";

function ShoppingCart() {
  const { cart } = useContext(Context);
  return (
    <div>
      <h2>ShoppingCart</h2>
      {cart.map((book, index) => (
        <BookItem key={Math.random()} book={book} index={index} />
      ))}
    </div>
  );
}

export default ShoppingCart;
