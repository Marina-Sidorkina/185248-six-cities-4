import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App should render correctly`, () => {
  const appTree = renderer
    .create(<App
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

  expect(appTree).toMatchSnapshot();
});
