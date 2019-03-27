import React, { Fragment } from "react";
import BookItem from "./BookItem/BookItem";
import _ from "lodash";
import { useFetch } from "react-hooks-fetch";
import "./booklist.css";

function BookList() {
  const { error, data } = useFetch("/data.json");

  if (error) return <span>Error:{error.message}</span>;
  if (!data) return null; // this is important

  return (
    <Fragment>
      <h2>BookList</h2>
      <ul>
        {_.uniqBy(data, "isbn").map(book => (
          <li key={book.isbn + Math.random()} className="book_entry">
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default BookList;
