import React, { Fragment, useContext } from "react";
import Context from "../../Context/Context";
import "./ItemCounter.css";

const ItemCounter = ({ book, count }) => {
  const { cart, change } = useContext(Context);

  const addItem = () => {
    change([...cart, book]);
  };
  const removeItem = () => {
    const cleanedCart = cart.map(element => {
      if (element.book.isbn === book.isbn) {
        if (element.count > 1) element.count--;
      }
      return element;
    });

    change(cleanedCart);
  };

  return (
    <Fragment>
      <button
        onClick={() => {
          addItem();
        }}
      >
        +
      </button>
      <input defaultValue={count} />
      <button
        disabled={count === 1}
        onClick={() => {
          removeItem();
        }}
      >
        -
      </button>
    </Fragment>
  );
};

export default ItemCounter;
