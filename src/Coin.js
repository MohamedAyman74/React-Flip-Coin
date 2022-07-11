import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    const { image, alt } = this.props;
    return (
      <div className="Coin">
        {image ? <img src={image} alt={alt}></img> : ""}
      </div>
    );
  }
}

export default Coin;
