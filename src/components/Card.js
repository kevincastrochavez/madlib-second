import React, { Component } from "react";
import Content from "./Content";
import Input from "./Input";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      color: "",
      pluralNoun: "",
      adjectiveOne: "",
      celebOne: "",
      adjectiveTwo: "",
      nounOne: "",
      numberOne: "",
      numberTwo: "",
      nounTwo: "",
      adjectiveThree: "",
      celebTwo: "",
      celebThree: "",
      adjectiveFour: "",
      nounThree: "",
      celebFour: "",
      adjectiveFive: "",
      showContent: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({ showContent: !this.state.showContent });
  }

  render() {
    const inputData = [
      { title: "Color", state: this.state.color, name: "color" },
      {
        title: "Plural Noun",
        state: this.state.pluralNoun,
        name: "pluralNoun",
      },
      {
        title: "Adjective",
        state: this.state.adjectiveOne,
        name: "adjectiveOne",
      },
      { title: "Celebrity", state: this.state.celebOne, name: "celebOne" },

      {
        title: "Adjective",
        state: this.state.adjectiveTwo,
        name: "adjectiveTwo",
      },
      { title: "Noun", state: this.state.nounOne, name: "nounOne" },
      { title: "Number", state: this.state.numberOne, name: "numberOne" },
      { title: "Number", state: this.state.numberTwo, name: "numberTwo" },

      { title: "Noun", state: this.state.nounTwo, name: "nounTwo" },
      {
        title: "Adjective",
        state: this.state.adjectiveThree,
        name: "adjectiveThree",
      },
      { title: "Celebrity", state: this.state.celebTwo, name: "celebTwo" },
      { title: "Celebrity", state: this.state.celebThree, name: "celebThree" },

      {
        title: "Adjective",
        state: this.state.adjectiveFour,
        name: "adjectiveFour",
      },
      { title: "Noun", state: this.state.nounThree, name: "nounThree" },
      { title: "Celebrity", state: this.state.celebFour, name: "celebFour" },
      {
        title: "Adjective",
        state: this.state.adjectiveFive,
        name: "adjectiveFive",
      },
    ];

    return (
      <form onSubmit={this.handleFormSubmit} className="card">
        <div className="card__inputs">
          {inputData.map((input) => (
            <Input
              key={input.name}
              title={input.title}
              value={input.state}
              onChange={this.handleInputChange}
              name={input.name}
            />
          ))}
        </div>

        <button type="submit">
          {!this.state.showContent ? "Generate Mad Lib" : "Clear Mad Lib"}
        </button>

        {this.state.showContent ? <Content data={this.state} /> : ""}
      </form>
    );
  }
}

export default Card;
