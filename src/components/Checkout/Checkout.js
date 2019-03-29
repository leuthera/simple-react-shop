import React, { Fragment, useContext, useState, useEffect } from "react";
import Context from "../ContextProvider/Context";
import Formatter from "../../services/Formatter/Formatter";
import { Redirect } from "react-router-dom";
import Modal from "../Modal/Modal";

function Checkout() {
  const { cart, change } = useContext(Context);
  const [showModal, setModal] = useState(false);
  const [endOfProcess, setEndofProcess] = useState(false);

  const order = {
    sum: cart.reduce((acc, curr) => acc + curr.count * curr.book.price, 0),
    books: cart.map(item => ({
      isbn: item.book.isbn,
      count: item.count,
      price: item.book.price,
      name: item.book.title
    })),
    currency: Formatter.resolvedOptions().currency
  };

  const checkout = () => setModal(true);

  return (
    <Fragment>
      Sum: <b>{Formatter.format(order.sum)}</b>
      <br />
      <button
        onClick={() => {
          checkout();
          console.log(order);
        }}
      >
        Checkout
      </button>
      {showModal && (
        <Modal
          msg="Thank you!"
          order={order}
          onLoad={() => change([])}
          close={() => {
            setModal(false);
            change([]);
            setEndofProcess(true);
          }}
        />
      )}
      {endOfProcess && <Redirect to="/" />}
    </Fragment>
  );
}

export default Checkout;
