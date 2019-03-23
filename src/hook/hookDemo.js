import React, {useState, useEffect} from 'react'

export default function hookDemo(props){
    const [player1, setPlayer1] = useState('player1') 
    const [player2, setPlayer2] = useState('player2') 
    const [sport, setSport] = useState('PES') 

    useEffect(() => {
        document.title = "Sport: " + sport;
    })

    function handleplayer1NameChange(e){
        setPlayer1(e.target.value)
    }

    function handleplayer2NameChange(e){
        setPlayer2(e.target.value)
    }

    function HandleSportChange(e){
        setSport(e.target.value)
    }

    return (
        <div>
            <div>
                <label>Player 1: </label>
                <input value={player1} onChange={handleplayer1NameChange} />
            </div>
            <div>
                <label>Player 2: </label>
                <input value={player2} onChange={handleplayer2NameChange} />
            </div>
            <div>
                    <p>Select Sport</p>
                    <label>PES: </label> 
                    <input type='radio' value="PES" name="PES" onChange={HandleSportChange} checked={sport === "PES"}></input>
                    <label>Stoni Fudbal: </label>
                    <input type='radio' value="Stoni Fudbal" name="Stoni Fudbal" onChange={HandleSportChange} checked={sport === "Stoni Fudbal"}></input>
                    <label>Bilijar: </label>
                    <input type='radio' value="Bilijar" name="Bilijar" onChange={HandleSportChange} checked={sport === "Bilijar"}></input>
                    <label>Pikado: </label>
                    <input type='radio' value="Pikado" name="Pikado"onChange={HandleSportChange} checked={sport === "Pikado"}></input>
                </div>
            <hr/>
            <label>{player1} vs {player2}</label>
        </div>
    )
}