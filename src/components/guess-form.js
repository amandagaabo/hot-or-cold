import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {
  function handleChange (e) {
    const guess = e.target.value;

    if (!guess) {
      return;
    }

    props.onChange(parseInt(guess, 10));
  }

  function handleSubmit (e) {
    e.preventDefault();
    props.onSubmit(e.target.value);
  }

  return (
    <div className="guess-form">
      <p>Guess a number between {props.min} & {props.max}</p>
      <form className="guess-form" onSubmit={handleSubmit}>
        <input type="number" className="guess-input"
          max={props.max}
          min={props.min}
          value={props.value}
          onChange={handleChange}
          required />
        <button type="submit" className="guess-buton">Guess</button>
      </form>
    </div>
  );
}
