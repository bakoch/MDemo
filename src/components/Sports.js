import React from "react";

const Sports = props => {
  return (
    <div>
      <p className="column">Select Sport</p>

      <div className="select-sport">
        <div className="sport-holder">
          <label>PES: </label>
          <input
            type="radio"
            value="PES"
            name="PES"
            onChange={props.handleChange}
            checked={props.checked === "PES"}
          />
        </div>
        <div className="sport-holder">
          <label>Stoni Fudbal: </label>
          <input
            type="radio"
            value="Stoni Fudbal"
            name="Stoni Fudbal"
            onChange={props.handleChange}
            checked={props.checked === "Stoni Fudbal"}
          />
        </div>
        <div className="sport-holder">
          <label>Bilijar: </label>
          <input
            type="radio"
            value="Bilijar"
            name="Bilijar"
            onChange={props.handleChange}
            checked={props.checked === "Bilijar"}
          />
        </div>
        <div className="sport-holder">
          <label>Pikado: </label>
          <input
            type="radio"
            value="Pikado"
            name="Pikado"
            onChange={props.handleChange}
            checked={props.checked === "Pikado"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sports;
