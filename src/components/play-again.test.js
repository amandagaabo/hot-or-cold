import React from 'react';
import {shallow} from 'enzyme';

import PlayAgain from './play-again';

describe('<PlayAgain />', () => {
  it('Renders without crashing', () => {
      shallow(<PlayAgain />);
  });

  it('Should call onClick when play again button is clicked', () => {
      const callback = jest.fn();
      const wrapper = shallow(<PlayAgain onClick={callback} />);
      const button = wrapper.find('button');
      button.simulate('click');
      expect(callback).toHaveBeenCalledTimes(1);
  });
});
