import React, { Fragment } from "react";
import DetailFooter from "../DetailFooter/DetailFooter";

const Detail = ({ book, index }) => {
  return (
    <Fragment>
      <ul>
        {Object.keys(book).map(identifier => {
          return (
            <li key={identifier}>
              <strong>{identifier}</strong> : {book[identifier]}
            </li>
          );
        })}
      </ul>
      <DetailFooter data={book} index={index} />
    </Fragment>
  );
};

export default Detail;
