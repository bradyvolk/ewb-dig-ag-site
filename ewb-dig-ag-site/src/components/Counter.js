import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <Button variant="outline-primary" onClick={() => this.increment()}>
          Increment
        </Button>
      </div>
    );
  }
}

export default Counter;
