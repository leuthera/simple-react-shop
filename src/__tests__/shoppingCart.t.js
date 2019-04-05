import React from "react";
import ReactDOM from "react-dom";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import ContextProvider from "../components/ContextProvider/ContextProvider";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextProvider>
      <ShoppingCart />
    </ContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
