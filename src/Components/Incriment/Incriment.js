import React, { Component } from 'react';
import { Container, Button } from './IncrimentStyles';

class Increment extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  incrementHandler = event => {
    this.setState((state, props) => ({ value: state.value + props.step }));
  };

  decrementHandler = event => {
    this.setState((state, props) => ({ value: state.value - props.step }));
  };

  render() {
    const { step } = this.props;

    return (
      <Container>
        <span>{this.state.value}</span>
        <Button type="button" onClick={this.incrementHandler}>
          Increment by {step}
        </Button>
        <Button type="button" onClick={this.decrementHandler}>
          Decrement by {step}
        </Button>
      </Container>
    );
  }
}

export default Increment;
