import React, { Fragment } from "react";
import "./todo.css";

function ToDo() {
  return (
    <Fragment>
      <h2>ToDo</h2>
      <ul className="todo">
        <li className="done">List</li>
        <li className="done">Details</li>
        <li className="done">ShoppingCart</li>
        <li className="done">Router</li>
        <li className="done">Folder structure</li>
        <li className="done">Suspense + Lazy</li>
        <li className="done">fetch JSON</li>
        <li className="done">Hooks + Context-API</li>
        <li className="done">Persistent storage, e.g. localStorage</li>
        <li className="done">Filter duplicate entries</li>
        <li>Show price</li>
        <li>Show +/- for entries, filter duplicate entries</li>
        <li>Checkout, just calculate price and send isbn + sum</li>
        <li>Tests</li>
      </ul>
    </Fragment>
  );
}

export default ToDo;
