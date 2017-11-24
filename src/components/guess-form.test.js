import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
      shallow(<GuessForm />);
  });

  it('Should call onChange when input text changes', () => {
      const callback = jest.fn();
      const wrapper = shallow(<GuessForm onChange={callback} />);
      const inputField = wrapper.find('input[type="number"]');
      inputField.simulate('change', {target: {value:'1'} });
      expect(callback).toHaveBeenCalledTimes(1);
      inputField.simulate('change', {target: {value: '1'}});
      expect(callback).toHaveBeenCalledTimes(2);
  });

  it('Should call onSubmit when form is submitted', () => {
      const callback = jest.fn();
      const callback2 = jest.fn();
      const wrapper = mount(<GuessForm onSubmit={callback} onChange={callback2} />);
      const inputField = wrapper.find('input[type="number"]');
      inputField.simulate('change', {target: {value: '1'}});
      expect(callback2).toHaveBeenCalledTimes(1);

      wrapper.find('form').simulate('submit');
      expect(callback).toHaveBeenCalledTimes(1);
  });
});
