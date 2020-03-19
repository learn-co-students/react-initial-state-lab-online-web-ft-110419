import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(prop) {
    super()
    this.state = {
      secondsLeft: prop.initialCount
    }
  }
  
  render() {
    let seconds = this.state.secondsLeft
    return seconds > 0 ? `${seconds} seconds left before I go boom!` : 'Boom!'
  }
}