import React from "react";
import "./Counter.module.css";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    goodValue: this.props.initialValue,
    neutralValue: this.props.initialValue,
    badValue: this.props.initialValue,
  };

  handleGoodFeedback = () => {
    this.setState((prevState) => ({
      goodValue: prevState.goodValue + 1,
    }));
  };

  handleNeutralFeedback = () => {
    this.setState((prevState) => ({
      neutralValue: prevState.neutralValue + 1,
    }));
  };

  handleBadFeedback = () => {
    this.setState((prevState) => ({
      badValue: prevState.badValue + 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__GoodValue">{this.state.goodValue}</span>
        <span className="Counter__NeutralValue">{this.state.neutralValue}</span>
        <span className="Counter__BadValue">{this.state.badValue}</span>

        <Value value={this.state.value} />

        <Controls
          onGoodFeedback={this.handleGoodFeedback}
          onNeutralFeedback={this.handleNeutralFeedback}
          onBadFeedback={this.handleBadFeedback}
        />
      </div>
    );
  }
}

export default Counter;
