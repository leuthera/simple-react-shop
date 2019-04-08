import React, { Suspense, lazy, Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import ToDo from "./components/ToDo/ToDo";
import Navi from "./components/Navi/Navi";
import Loader from "./components/Loader/Loader";
import User from "./components/User/User";
import ContextProvider from "./components/ContextProvider/ContextProvider";

import "./ext/normalize.css";
import "./index.css";

const BookList = lazy(() => import("./components/BookList/BookList"));
const ShoppingCart = lazy(() =>
  import("./components/ShoppingCart/ShoppingCart")
);

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <ToDo />
        <BrowserRouter>
          <Fragment>
            <Navi />
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path="/" component={() => <BookList />} />
                <Route path="/cart" component={() => <ShoppingCart />} />
                <Route path="/user" component={() => <User />} />
              </Switch>
            </Suspense>
          </Fragment>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
