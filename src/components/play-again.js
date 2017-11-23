import React from 'react';
import './play-again.css';

export default function CorrectAns(props) {
  return (
    <div className="play-again">
      <p>You win!</p>
      <button type="button" className="reset-buton" onClick={props.onClick}>Play Again</button>
    </div>
  );
}
