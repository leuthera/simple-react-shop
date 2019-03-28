import React, { Fragment, useState, useContext } from "react";
import Context from "../../ContextProvider/Context";
import Detail from "./Detail/Detail";
import Formatter from "../../../services/Formatter/Formatter";

function BookItem({ book, index }) {
  const [showDetail, toggle] = useState(false);
  const { cart } = useContext(Context);
  const priceMultiplicator =
    cart[index] && cart[index].count ? cart[index].count : 1;
  return (
    <Fragment>
      <h2
        className="book-title"
        onClick={() => {
          toggle(!showDetail);
        }}
      >
        {book.title}
      </h2>
      <span className="book-price">
        {Formatter.format(book.price * priceMultiplicator)}
      </span>
      {showDetail && <Detail book={book} index={index} />}
    </Fragment>
  );
}

export default BookItem;
