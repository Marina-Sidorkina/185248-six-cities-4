import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Card from "./card.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`<Card/> component testing`, () => {

  it(`onCardHeaderClick callback should be called once by click`, () => {
    const clickHandler = jest.fn();

    const cardComponent = shallow(<Card
      offer={`Wood and stone place`}
      onCardHeaderClick={clickHandler}
    />);

    cardComponent
      .find(`a`)
      .at(1)
      .simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
