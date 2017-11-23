import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {
  return (
    <div className="guess-form">
      <p>Guess a number between 0 & 100</p>
      <form className="guess-form" onSubmit={e => props.onSubmit(e)}>
        <input type="number" max={props.max} min={props.min} required value={props.value} className="guess-input" onChange={e => props.onChange(e.target.value, e)}/>
        <button type="submit" className="guess-buton">Guess</button>
      </form>
    </div>
  );
}
