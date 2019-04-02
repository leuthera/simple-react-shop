import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./overlay.css";

const Overlay = ({ close, children }) => {
  return ReactDOM.createPortal(
    <aside className="overlay-wrapper">
      <div className="overlay-container">
        <div>
          <button className="button-right" onClick={() => close()}>
            Close
          </button>
        </div>
        {children}
      </div>
    </aside>,
    document.body
  );
};

export default Overlay;
