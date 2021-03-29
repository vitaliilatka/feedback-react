import React from "react";
import "./Counter.module.css";
import Controls from "./Controls";
// import Value from "./Value";
import CountGoodFeedback from "../Statistics/CountGoodFeedback";
import CountNeutralFeedback from "../Statistics/CountNeutralFeedback";
import CountBadFeedback from "../Statistics/CountBadFeedback";

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
        <Controls
          onGoodFeedback={this.handleGoodFeedback}
          onNeutralFeedback={this.handleNeutralFeedback}
          onBadFeedback={this.handleBadFeedback}
        />

        <h1>Statistics</h1>
        <CountGoodFeedback value={this.state.goodValue} />
        <CountNeutralFeedback value={this.state.neutralValue} />
        <CountBadFeedback value={this.state.badValue} />
        {/* <Value value={this.state.value} /> */}
      </div>
    );
  }
}

export default Counter;
