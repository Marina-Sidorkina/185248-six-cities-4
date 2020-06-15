import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {resultAmount, offersList} = props;

  return <Main
    resultAmount={resultAmount}
    offersList={offersList}
  />;
};

App.propTypes = {
  resultAmount: PropTypes.number.isRequired,
  offersList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
