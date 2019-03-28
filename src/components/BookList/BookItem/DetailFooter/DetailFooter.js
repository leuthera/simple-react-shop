import React, { useContext, Fragment } from "react";
import Context from "../../../ContextProvider/Context";
import { withRouter } from "react-router-dom";

const removeFromCart = (cart, index) => {
  const newCart = [...cart];
  newCart.splice(index, 1);
  return newCart;
};

const DetailFooter = ({ data, location, index }) => {
  const { cart, change } = useContext(Context);
  return (
    <Fragment>
      {location.pathname === "/" && (
        <button onClick={() => change([...cart, data])}>Add</button>
      )}

      {location.pathname === "/cart" && (
        <button onClick={() => change(removeFromCart(cart, index))}>
          Remove
        </button>
      )}
    </Fragment>
  );
};

export default withRouter(DetailFooter);
