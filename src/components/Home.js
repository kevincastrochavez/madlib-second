import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Card />
      </div>
    );
  }
}
