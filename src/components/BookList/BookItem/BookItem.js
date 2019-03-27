import React, { Fragment, useState } from "react";
import Detail from "./Detail/Detail";

function BookItem({ book, index }) {
  const [showDetail, toggle] = useState(false);
  return (
    <Fragment>
      <h2
        onClick={() => {
          toggle(!showDetail);
        }}
      >
        {book.title}
      </h2>
      {showDetail && <Detail book={book} index={index} />}
    </Fragment>
  );
}

export default BookItem;
