import React, { Component } from "react";
import Input from "./Input";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Input title="Hi" />
      </div>
    );
  }
}

export default Card;
