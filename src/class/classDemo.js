import React, { Component } from "react";
import Players from "../components/Player";
import Sports from "../components/Sports";
import Row from "../components/Row";

export default class ClassDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
      sport: "PES"
    };
  }

  componentDidMount() {
    document.title = "Sport: " + this.state.sport;
  }

  componentDidUpdate() {
    document.title = "Sport: " + this.state.sport;
  }

  handleplayer1NameChange = e => {
    this.setState({ player1: e.target.value });
  };

  handleplayer2NameChange = e => {
    this.setState({ player2: e.target.value });
  };

  HandleSportChange = e => {
    this.setState({
      sport: e.target.value
    });
  };

  render() {
    return (
      <div className="home-container">
        <h1>Class Demo</h1>
        <Players
          placeholder={"Player1"}
          label={"Player 1: "}
          name={this.state.player1}
          handleChange={this.handleplayer1NameChange}
        />
        <Players
          placeholder={"Player2"}
          label={"Player 2: "}
          name={this.state.player2}
          handleChange={this.handleplayer2NameChange}
        />
        <Sports
          handleChange={this.HandleSportChange}
          checked={this.state.sport}
        />
        <hr />
        {this.state.player1 !== "" || this.state.player2 !== "" ? (
          <Row player1={this.state.player1} player2={this.state.player2} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
