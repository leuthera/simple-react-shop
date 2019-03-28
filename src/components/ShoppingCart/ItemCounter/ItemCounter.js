import React, { Fragment } from "react";
import "./ItemCounter.css";

const ItemCounter = () => {
  return (
    <Fragment>
      <button>+</button>
      <input value="5" />
      <button>-</button>
    </Fragment>
  );
};

export default ItemCounter;
