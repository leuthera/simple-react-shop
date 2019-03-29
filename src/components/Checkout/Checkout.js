import React, { Fragment, useContext, useState } from "react";
import Context from "../ContextProvider/Context";
import Formatter from "../../services/Formatter/Formatter";
import Modal from "../Modal/Modal";

function Checkout() {
  const { cart } = useContext(Context);
  const [showModal, setModal] = useState(false);

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

  const checkout = () => {
    setModal(true);
  };

  return (
    <Fragment>
      Sum: <b>{Formatter.format(order.sum)}</b>
      <br />
      <button
        onClick={() => {
          checkout();
        }}
      >
        Checkout
      </button>
      {showModal && (
        <Modal
          msg="Thank you!"
          order={order}
          close={() => {
            setModal(false);
          }}
        />
      )}
    </Fragment>
  );
}

export default Checkout;
