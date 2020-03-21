import React, { Component } from 'react';

export default class Bomb extends Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        //these should render in divs to actually work
        if (this.state.secondsLeft === 0){
            return(
                `Boom!`
            )
        } else {
            return(
                `${this.state.secondsLeft} seconds left before I go boom!`
            )
        }
    }

}