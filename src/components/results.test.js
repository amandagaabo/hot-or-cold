import React from 'react';
import {shallow} from 'enzyme';

import Results from './results';

describe('<Results />', () => {
    it('Renders without crashing', () => {
        shallow(<Results guesses={[]} />);
    });


    it('Renders a list of guesses', () => {
      const guesses = [
        {number: 1, result: "hot"},
        {number: 2, result: "hot"},
        {number: 3, result: "hot"},
      ];
      const wrapper = shallow(<Results guesses={guesses} />);
      const items = wrapper.find('li');

      expect(wrapper.hasClass("results-box")).toEqual(true);

      guesses.forEach((guess, index) => {
        expect(items.at(index).text()).toEqual(`${guess.number} ${guess.result}`);
      });
    });

});
