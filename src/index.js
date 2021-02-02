import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import WebFontLoader from "webfontloader";

WebFontLoader.load({
  google: {
    families: [
      "Roboto:400,500,700:latin-ext",
      "Merriweather:400,700:latin-ext",
    ],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
