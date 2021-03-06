import React, { Fragment, useState } from "react";
import Overlay from "./Overlay/Overlay";
import "./todo.css";

function ToDo() {
  const [showOverlay, setOverlay] = useState(false);

  return (
    <Fragment>
      <button
        className="button-right"
        onClick={() => {
          setOverlay(true);
        }}
      >
        ToDos
      </button>

      {showOverlay && (
        <Overlay
          close={() => {
            setOverlay(false);
          }}
        >
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
            <li className="done">Show price</li>
            <li className="done">
              Show +/- for entries, filter duplicate entries
            </li>
            <li className="done">
              Add "," instead of "." for prices and fillup 2 decimal places
            </li>
            <li className="done">
              Checkout, just calculate price and send isbn + sum
            </li>
            <li className="done">
              Show succesful purchase as modal overlay or growl message
            </li>
            <li className="done">
              After purchase switch to "Home" and clear cart
            </li>
            <li className="done">Handle unknown router path</li>
            <li>
              Redux + User
              <ul>
                <li>Update userdata</li>
                <li>Show user in cart</li>
              </ul>
            </li>
            <li>
              Tests
              <ul>
                <li>shoppingCart.t.js - mocking components</li>
              </ul>
            </li>
          </ul>
        </Overlay>
      )}
    </Fragment>
  );
}

export default ToDo;
