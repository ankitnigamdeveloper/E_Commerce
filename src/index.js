import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTxdzKzlV_rjGAXVDDCbhuOPVcvwxDdjU",
  authDomain: "reactjsecommerce-14adf.firebaseapp.com",
  projectId: "reactjsecommerce-14adf",
  storageBucket: "reactjsecommerce-14adf.appspot.com",
  messagingSenderId: "535310874477",
  appId: "1:535310874477:web:03180ffe4380f3b2dbcc64",
  measurementId: "G-CN8ZJ4E46E"
};

firebase.initializeApp(firebaseConfig)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
