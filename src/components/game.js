import React from 'react';
import './game.css';
import GuessForm from './guess-form'
import Results from './results'
import PlayAgain from './play-again'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNumber: this.generateRandom(),
      max: 100,
      min: 0,
      currentGuess: {
        number: "",
        result: ""
      },
      allGuesses: [],
      correct: false
    }

    //Setup proper "this" bindings so functions below have access to "this"
    this.updateCurrentGuess = this.updateCurrentGuess.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  generateRandom() {
    return Math.floor(Math.random() * 101)
  }

  updateCurrentGuess(number) {
    const target = this.state.targetNumber

    let result
    if (number === target) {
      result = "correct"
    } else if (number < target - 5 || number > target + 5) {
      result = "cold"
    } else if (number >= target - 5 && number <= target + 5) {
      result = "hot"
    }

    this.setState(
      {currentGuess: {number, result}}
    );
  }

  onSubmit() {
    const allGuesses = [...this.state.allGuesses, this.state.currentGuess]
    const currentGuess = {
      number: "",
      result: ""
    }

    const correct = this.state.currentGuess.result === "correct";

    this.setState(
      {allGuesses, currentGuess, correct}
    );
  }

  resetGame() {
    this.setState({
      targetNumber: this.generateRandom(),
      currentGuess: {
        number: "",
        result: ""
      },
      allGuesses: [],
      correct: false
    })
  }

  render() {
    const guessForm =
      <GuessForm
        max={this.state.max}
        min={this.state.min}
        value={this.state.currentGuess.number}
        onSubmit={this.onSubmit}
        onChange={this.updateCurrentGuess} />
      // previously used:
      // onSubmit={(e) => this.onSubmit(e)}
      // onChange={(currentGuess) => this.updateCurrentGuess(currentGuess)}
      // this creates an anonoymous function every time the page is rendered and gives access to "this"
      // the downside is that everytime the page is rendered, the function is created which means
      // the props onSubmit and onChange are changed and when props change the render runs again
      // above the function is passed in as a prop and binding is setup in the constructor at the beginning

    const playAgain = <PlayAgain onClick={this.resetGame} />

    return (
      <div className="game-box">
        <h2><span className="hot">Hot</span> or <span className="cold">Cold</span></h2>
        {this.state.correct ? null : guessForm}
        <Results guesses={this.state.allGuesses} result={this.state.currentGuess.result}/>
        {this.state.correct ? playAgain : null}
      </div>
    );
  }
}
