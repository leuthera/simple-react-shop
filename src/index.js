import React, { Suspense, lazy, Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ToDo from "./components/ToDo/ToDo";
import Navi from "./components/Navi/Navi";
import Loader from "./components/Loader/Loader";
import ContextProvider from "./components/Context/ContextProvider";

import "./ext/normalize.css";
import "./app.css";

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
              </Switch>
            </Suspense>
          </Fragment>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
