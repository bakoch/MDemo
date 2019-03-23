import React, { Component } from 'react'

export default class classDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: "player 1",
            player2: "player 2",
            sport: "PES"
        }
    }

    componentDidMount(){
       document.title = "Sport: " + this.state.sport;
    }

    componentDidUpdate(){
        document.title = "Sport: " + this.state.sport;
    }

    handleplayer1NameChange = (e) => {
        this.setState({ player1: e.target.value })
    }

    handleplayer2NameChange = (e) => {
        this.setState({ player2: e.target.value })
    }

    HandleSportChange = (e) => {
        this.setState({
            sport: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label>Player 1: </label>
                    <input value={this.state.player1} onChange={this.handleplayer1NameChange} />
                </div>
                <div>
                    <label>Player 2: </label>
                    <input value={this.state.player2} onChange={this.handleplayer2NameChange} />
                </div>
                <div>
                    <p>Select Sport</p>
                    <label>PES: </label> 
                    <input type='radio' value="PES" name="PES" onChange={this.HandleSportChange} checked={this.state.sport === "PES"}></input>
                    <label>Stoni Fudbal: </label>
                    <input type='radio' value="Stoni Fudbal" name="Stoni Fudbal" onChange={this.HandleSportChange} checked={this.state.sport === "Stoni Fudbal"}></input>
                    <label>Bilijar: </label>
                    <input type='radio' value="Bilijar" name="Bilijar" onChange={this.HandleSportChange} checked={this.state.sport === "Bilijar"}></input>
                    <label>Pikado: </label>
                    <input type='radio' value="Pikado" name="Pikado"onChange={this.HandleSportChange} checked={this.state.sport === "Pikado"}></input>
                </div>
                <hr/>
                <label>{this.state.player1} vs {this.state.player2}</label>
            </div>
        )
    }
}
