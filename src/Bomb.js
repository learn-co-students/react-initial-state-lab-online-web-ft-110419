import React from 'react'

export default class Bomb extends React.Component {
	state = {
		secondsLeft: this.props.initialCount
	}

	decrement = () => {
		if (this.state.secondsLeft > 0) {
			this.setState({
				secondsLeft: this.state.secondsLeft - 1
			})
		}
	}

	render() {
		// this.decrement()
		return(
		<div><h2>{this.state.secondsLeft <= 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}</h2></div>
		)
	}
}

// your Bomb code here!
