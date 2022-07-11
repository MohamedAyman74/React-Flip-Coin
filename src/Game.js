import React, { Component } from "react";
import "./Game.css";
import Coin from "./Coin";

class Game extends Component {
  static defaultProps = { title: "Flip A Coin!" };
  constructor(props) {
    super(props);
    this.state = { image: "", heads: 0, tails: 0, alt: "" };
    this.handlieClick = this.handlieClick.bind(this);
  }

  flipCoin() {
    const rand = Math.floor(Math.random() * 2) + 1;
    rand % 2 === 0
      ? this.setState((currState) => ({
          heads: (currState.heads += 1),
          image: "https://tinyurl.com/react-coin-heads-jpg",
          alt: "heads",
        }))
      : this.setState((currState) => ({
          tails: (currState.tails += 1),
          image:
            "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
          alt: "tails",
        }));
  }

  handlieClick() {
    this.flipCoin();
  }

  render() {
    const { heads, tails, image, alt } = this.state;
    return (
      <div className="Game">
        <h1>{this.props.title}</h1>
        <Coin image={image} alt={alt} />
        <p>
          Total flips: {heads + tails}, total heads: {heads} and total tails:
          {tails}
        </p>
        <button onClick={this.handlieClick}>Flip Coin</button>
      </div>
    );
  }
}

export default Game;
