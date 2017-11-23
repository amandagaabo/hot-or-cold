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
  }

  generateRandom() {
    return Math.floor(Math.random() * 101)
  }

  updateCurrentGuess(number) {
    const target = this.state.targetNumber
    const guess = parseInt(number, 10)

    let result
    if (guess === target) {
      result = "correct"
    } else if (guess < target - 5 || guess > target + 5) {
      result = "cold"
    } else if (guess >= target - 5 && guess <= target + 5) {
      result = "hot"
    }

    const currentGuess = {
      number: guess,
      result: result
    }

    this.setState(
      {currentGuess}
    );
  }

  onSubmit(e) {
    e.preventDefault()

    const allGuesses = [...this.state.allGuesses, this.state.currentGuess]
    const currentGuess = {
      number: "",
      result: ""
    }
    let correct = false
    if (this.state.currentGuess.result === "correct") {
      correct = true
    }

    this.setState(
      {allGuesses, currentGuess, correct}
    );
  }

  resetGame(e) {
    e.preventDefault()

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
    let playAgain = ""
    if(this.state.correct) {
      playAgain = <PlayAgain onClick={(e) => this.resetGame(e)} />
    }

    return (
      <div className="game-box">
        <h2><span className="hot">Hot</span> or <span className="cold">Cold</span></h2>
        <GuessForm max={this.state.max} min={this.state.min} value={this.state.currentGuess.number}
          onSubmit={(e) => this.onSubmit(e)}
          onChange={(currentGuess) => this.updateCurrentGuess(currentGuess)} />
        <Results guesses={this.state.allGuesses} result={this.state.currentGuess.result}/>
        {playAgain}
      </div>
    );
  }
}
