import React, { useState, useEffect } from "react";
import Players from "../components/Player";
import Sports from "../components/Sports";
import Row from "../components/Row";

export default function hookDemo(props) {
  const player1 = useFormInput("");
  const player2 = useFormInput("");
  const sport = useFormInput("PES");

  useEffect(() => {
    document.title = "Sport: " + sport.value;
  });

  // function handleplayer1NameChange(e) {
  //     setPlayer1(e.target.value)
  // }

  // function handleplayer2NameChange(e) {
  //     setPlayer2(e.target.value)
  // }

  // function HandleSportChange(e) {
  //     setSport(e.target.value)
  // }

  return (
    <div className="home-container">
      <h1>Hook Demo</h1>
      <Players
        placeholder={"Player1"}
        label={"Player 1: "}
        name={player1.value}
        handleChange={player1.onChange}
      />
      <Players
        placeholder={"Player2"}
        label={"Player 2: "}
        name={player2.value}
        handleChange={player2.onChange}
      />
      <Sports handleChange={sport.onChange} checked={sport.value} />
      <hr />
      {player1.value !== "" || player2.value !== "" ? (
        <Row player1={player1.value} player2={player2.value} />)
        : (<div />)}
    </div>
  );

  function useFormInput(input) {
    const [value, setValue] = useState(input);

    function HandleChange(e) {
      setValue(e.target.value);
    }

    return {
      value,
      onChange: HandleChange
    };
  }
}
