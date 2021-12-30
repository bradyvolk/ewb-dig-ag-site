import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <Button variant="outline-primary" onClick={this.increment}>
          Increment
        </Button>
      </div>
    );
  }
}

export default Counter;
