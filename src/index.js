import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";

const rootElement = document.getElementById(`root`);

const init = () => {
  const settings = {
    resultAmount: 312
  };

  ReactDOM.render(
      <App
        resultAmount={settings.resultAmount}
      />,
      rootElement
  );
};

init();
