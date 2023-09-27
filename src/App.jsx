import { useState } from 'react'
import StartMenu from "./components/StartMenu";
import Game from "./components/Game";
import EndMenu from "./components/EndMenu";

export default function App() {
    const [actualScreen, setActualScreen] = useState("start");
    const [difficulty, setDifficulty] = useState("")

    const startGame = e => {
        setDifficulty(e.target.value);   
        setActualScreen("game");
    }

    switch (actualScreen) {
        case "start" :
            return (
                <StartMenu 
                    startGame={startGame}
                />
            );
        case "game" :
            return <Game difficulty={difficulty}/>;
        case "end" :
            return <EndMenu/>;
        default: 
            return <p>ERROR IN RENDERING</p>
    }
}

