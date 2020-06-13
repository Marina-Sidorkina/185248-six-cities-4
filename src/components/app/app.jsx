import React from "react";
import {Main} from "../main/main.jsx";

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {resultAmount} = props;

  return <Main
    resultAmount={resultAmount}
  />;
};
