import React from 'react'

const Sports = (props) => {
    return<div>
    <p>Select Sport</p>
    <label>PES: </label> 
    <input type='radio' value="PES" name="PES" onChange={props.handleChange} checked={props.checked === "PES"}></input>
    <label>Stoni Fudbal: </label>
    <input type='radio' value="Stoni Fudbal" name="Stoni Fudbal" onChange={props.handleChange} checked={props.checked === "Stoni Fudbal"}></input>
    <label>Bilijar: </label>
    <input type='radio' value="Bilijar" name="Bilijar" onChange={props.handleChange} checked={props.checked === "Bilijar"}></input>
    <label>Pikado: </label>
    <input type='radio' value="Pikado" name="Pikado"onChange={props.handleChange} checked={props.checked === "Pikado"}></input>
   </div>
}

export default Sports;
