import React from "react";

import {render} from 'react-dom'
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

// const store = createStore(
//   counter,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && 
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// )

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root"));
