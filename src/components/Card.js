import React, { Component } from "react";
import Input from "./Input";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      color: "Pink",
      pluralNoun: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ color: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <input
          type="text"
          onChange={(event) => this.handleInputChange(event)}
        />
      </div>
    );

    return (
      <div className="card">
        <h1>{this.state.color}</h1>
        <Input title="Color" />
        <Input title="Component" />
      </div>
    );
  }
}

export default Card;
