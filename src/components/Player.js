import React from 'react'

const Player = (props) => {
    console.log(props)
    return <div>
        <label>Player 1: </label>
        <input value={props.name} onChange={props.handleChange} />
    </div>
}

export default Player;