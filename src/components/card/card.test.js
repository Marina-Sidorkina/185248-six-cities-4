import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

it(`Card should render correctly`, () => {
  const cardTree = renderer
    .create(<Card
      offer={`Wood and stone place`}
      onCardHeaderClick={() => {}}
    />)
    .toJSON();

  expect(cardTree).toMatchSnapshot();
});
