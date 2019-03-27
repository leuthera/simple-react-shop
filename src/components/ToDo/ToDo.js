import React, { Fragment } from "react";
import "./todo.css";

function ToDo() {
  return (
    <Fragment>
      <h2>ToDo</h2>
      <ul className="todo">
        <li className="done">List</li>
        <li>Filter douplicate entries</li>
        <li>Show price</li>
        <li className="done">Details</li>
        <li className="done">ShoppingCart</li>
        <li>Show +/- for entries, filter doublicate entries</li>
        <li>Checkout, just calculate price and send isbn + sum</li>
        <li className="done">Router</li>
        <li className="done">Hooks + Context-API</li>
        <li className="done">Suspense + Lazy</li>
        <li className="done">fetch JSON</li>
        <li>Tests</li>
        <li>Persistent storage, e.g. localStorage</li>
        <li className="done">Folder structure</li>
      </ul>
    </Fragment>
  );
}

export default ToDo;
