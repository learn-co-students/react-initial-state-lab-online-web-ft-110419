// your Bomb code here!

import React from 'react'

class Bomb extends React.Component {
    
    state = {
        secondsLeft: this.props.initialCount
    }

    display() {
        return this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    }


    render() {
        return (
            <div>
                <p>{this.display()}</p>
            </div>
        )
    }
}

export default Bomb