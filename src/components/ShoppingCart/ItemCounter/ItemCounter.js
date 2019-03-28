import React, { Fragment } from "react";
import "./ItemCounter.css";

const ItemCounter = ({ count }) => {
  return (
    <Fragment>
      <button>+</button>
      <input defaultValue={count} />
      <button>-</button>
    </Fragment>
  );
};

export default ItemCounter;
