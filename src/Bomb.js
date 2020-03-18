// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {
  state = { secondsLeft: this.props.initialCount };
  render() {
    return <div> textInComponent </div>;
  }
}
