import React from "react";
import { Provider } from "react-redux";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/:filter" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default Root;
