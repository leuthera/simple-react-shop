import React, { useState } from "react";
import Context from "./Context";

const ContextApp = props => {
  const [cart, change] = useState([]);
  return (
    <Context.Provider
      value={{
        cart,
        change
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextApp;
