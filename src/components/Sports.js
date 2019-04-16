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
          <label>Table Football: </label>
          <input
            type="radio"
            value="Table Football"
            name="Table Football"
            onChange={props.handleChange}
            checked={props.checked === "Table Football"}
          />
        </div>
        <div className="sport-holder">
          <label>Biliard: </label>
          <input
            type="radio"
            value="Biliard"
            name="Biliard"
            onChange={props.handleChange}
            checked={props.checked === "Biliard"}
          />
        </div>
        <div className="sport-holder">
          <label>Darts: </label>
          <input
            type="radio"
            value="Darts"
            name="Darts"
            onChange={props.handleChange}
            checked={props.checked === "Darts"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sports;
