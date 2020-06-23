import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const rootElement = document.getElementById(`root`);

const init = () => {
  const settings = {
    resultAmount: 312,
    offersList: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
      `Wood and stone place`
    ],
    onCardHeaderClick: () => {}
  };

  ReactDOM.render(
      <App
        resultAmount={settings.resultAmount}
        offersList={settings.offersList}
        onCardHeaderClick={settings.onCardHeaderClick}
      />,
      rootElement
  );
};

init();
