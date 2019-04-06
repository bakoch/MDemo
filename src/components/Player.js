import React from 'react'

const Player = (props) => {
    console.log(props)
    return <div className="column">
        <label>{props.label}</label>
        <input value={props.name} onChange={props.handleChange} />
    </div>
}

export default Player;