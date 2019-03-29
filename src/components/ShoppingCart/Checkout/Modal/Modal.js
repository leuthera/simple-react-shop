import React from "react";
import ReactDOM from "react-dom";
import Formatter from "../../../../services/Formatter/Formatter";
import "./modal.css";

const ModalContent = ({ msg, order, close }) => {
  return ReactDOM.createPortal(
    <aside className="modal-wrapper">
      <div className="modal-container">
        <div class="close" onClick={() => close()}>
          <svg>
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </div>
        <h3>{msg}</h3>
        <ul className="order-list">
          {order.books.map(book => (
            <li key={Math.random()}>{`${book.count} x ${book.name}`}</li>
          ))}
          <li className="text-right">
            <hr />
            <b>Sum: {Formatter.format(order.sum)}</b>
          </li>
        </ul>
      </div>
    </aside>,
    document.body
  );
};

export default ModalContent;
