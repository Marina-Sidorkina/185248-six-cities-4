import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const Cards = (props) => {
  const {offersList, onCardHeaderClick} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((offer, index) => (
        <Card
          key={offer + index}
          offer={offer}
          onCardHeaderClick={onCardHeaderClick}
        />)
      )}
    </div>
  );
};

Cards.propTypes = {
  offersList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCardHeaderClick: PropTypes.func.isRequired
};

export default Cards;
