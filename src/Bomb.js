// your Bomb code here!
import React, { Component } from 'react';
// import Timer from 'easytimer.js';

export default class Bomb extends Component {

    constructor(props){
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    changeTimer = () => {
        this.setState(prevState => ({secondsLeft: prevState.secondsLeft - 1}));
    }

    componentDidMount() {
        this.interval = setInterval(this.changeTimer, 1000);
    }

    render(){
        if (this.state.secondsLeft === 0){
            clearInterval(this.interval);
            return (
                <h1>Boom!</h1>
            )
        } else {
            return (
                <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
            )
        }
    }
}