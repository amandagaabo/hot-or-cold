import React from 'react';
import './results.css';

export default function Results(props) {
  //console.log("result props", props)

  const guesses = props.guesses.map((guess, index) =>
    <li key={index} className={guess.result}>{guess.number} {guess.result}</li>
  );

  return (
    <div className="results-box">
      <p>Guess count: <span className="guess-count">{props.guesses.length}</span></p>
      <p>Numbers guessed:</p>
      <ul className="numbers-guessed">
        {guesses}
      </ul>
    </div>
  );
}
