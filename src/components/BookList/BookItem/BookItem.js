import React, { Fragment, useState } from "react";
import Detail from "./Detail/Detail";

function BookItem({ book, index }) {
  const [showDetail, toggle] = useState(false);
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
      <span className="book-price">{book.price} €</span>
      {showDetail && <Detail book={book} index={index} />}
    </Fragment>
  );
}

export default BookItem;
