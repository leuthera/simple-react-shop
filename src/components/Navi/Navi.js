import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../ContextProvider/Context";

import "./navi.css";

function ToDo() {
  const { cart } = useContext(Context);
  return (
    <Fragment>
      <h2>Navi</h2>
      <ul className="navi">
        <li>
          <NavLink exact={true} to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active">
            Cart ({cart.length})
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
}

export default ToDo;
