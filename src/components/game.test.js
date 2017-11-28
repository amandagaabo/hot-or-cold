import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
      shallow(<Game />);
  });

  it('Handles updateCurrentGuess()', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      'targetNumber': 50
    })
    wrapper.update()

    wrapper.instance().updateCurrentGuess(51);
    expect(wrapper.state('currentGuess')).toEqual({"number": 51, "result": "hot"});

    wrapper.instance().updateCurrentGuess(75);
    expect(wrapper.state('currentGuess')).toEqual({"number": 75, "result": "cold"});

    wrapper.instance().updateCurrentGuess(50);
    expect(wrapper.state('currentGuess')).toEqual({"number": 50, "result": "correct"});
  });

  it('Handles onSubmit()', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      'targetNumber': 50,
      'currentGuess': {
        'number': 50,
        'result': 'correct'
      },
      'allGuesses': [{"number": 51, "result": "hot"}, {"number": 75, "result": "cold"}]
    })

    const updatedGuesses = [
      {"number": 51, "result": "hot"},
      {"number": 75, "result": "cold"},
      {"number": 50, "result": "correct"}
    ]

    wrapper.update()

    wrapper.instance().onSubmit()
    expect(wrapper.state('currentGuess')).toEqual({'number': "", 'result': ""})
    expect(wrapper.state('allGuesses')).toEqual(updatedGuesses)
  });

  it('Handles resetGame()', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      'targetNumber': -1,
      'currentGuess': {
        'number': -1,
        'result': 'correct'
      },
      'allGuesses': [{"number": 51, "result": "hot"}, {"number": 75, "result": "cold"}]
    })
    wrapper.update()

    wrapper.instance().resetGame()
    expect(wrapper.state('targetNumber')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('targetNumber')).toBeLessThanOrEqual(100);
    expect(wrapper.state('currentGuess')).toEqual({'number': "", 'result': ""})
    expect(wrapper.state('allGuesses')).toEqual([])
  });
});
