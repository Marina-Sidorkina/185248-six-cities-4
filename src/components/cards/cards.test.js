import React from "react";
import renderer from "react-test-renderer";
import Cards from "./cards.jsx";

it(`Cards should render correctly`, () => {
  const cardsTree = renderer
    .create(<Cards
      offersList={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`,
        `Wood and stone place`
      ]}
      onCardHeaderClick={() => {}}
    />)
    .toJSON();

  expect(cardsTree).toMatchSnapshot();
});
