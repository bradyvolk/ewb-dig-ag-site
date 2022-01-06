import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 28,
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`${childName} says hello to his parent ${this.props.name}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} name="John" />
        <ChildComponent greetHandler={this.greetParent} name="Jeremy" />
      </div>
    );
  }
}
