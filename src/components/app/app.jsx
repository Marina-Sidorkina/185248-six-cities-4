import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {resultAmount, offersList, onCardHeaderClick} = props;

  return <Main
    resultAmount={resultAmount}
    offersList={offersList}
    onCardHeaderClick={onCardHeaderClick}
  />;
};

App.propTypes = {
  resultAmount: PropTypes.number.isRequired,
  offersList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCardHeaderClick: PropTypes.func.isRequired
};

export default App;
