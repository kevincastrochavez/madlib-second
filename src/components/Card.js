import React, { Component } from "react";
import Input from "./Input";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      color: "",
      pluralNoun: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div className="card">
        <h1>{this.state.color}</h1>
        <Input
          title="Color"
          value={this.state.color}
          onChange={this.handleInputChange}
          name="color"
        />
        <Input
          title="Plural Noun"
          value={this.state.pluralNoun}
          onChange={this.handleInputChange}
          name="pluralNoun"
        />
      </div>
    );
  }
}

export default Card;
