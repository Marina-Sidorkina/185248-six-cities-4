import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Main should render correctly`, () => {
  const mainTree = renderer
    .create(<Main
      resultAmount={312}
      offersList={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`,
        `Wood and stone place`
      ]}
    />)
    .toJSON();

  expect(mainTree).toMatchSnapshot();
});
