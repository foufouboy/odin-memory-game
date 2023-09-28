import { useState } from 'react'
import StartMenu from "./components/StartMenu";
import Game from "./components/Game";
import EndMenu from "./components/EndMenu";

export default function App() {
    const [gameState, setGameState] = useState({
        actualScreen: "end",
        difficulty: "easy",
        actualScore: 0,
    });

    const {
        actualScreen, 
        difficulty, 
        actualScore } = gameState;


    const cardsNumber = 
        difficulty === "hard" ? 12 :
        difficulty === "medium" ? 10 :
        8; // easy, default value


    const startGameAs = (difficulty) => {
        console.log(difficulty);
        setGameState(prev => ({
            ...prev, 
            actualScreen: "game",
            difficulty: difficulty,
        }));
    }

    switch (actualScreen) {
        case "start" :
            return (
                <StartMenu 
                    startGameAs={startGameAs}
                />
            );
        case "game" :
            return <Game difficulty={difficulty}/>;
        case "end" :
            return (
                <EndMenu
                    actualScore={8}
                    cardsNumber={cardsNumber}
                    startGame={() => startGameAs(difficulty)}
                    quit={() => setGameState(prev => ({...prev, actualScreen: "start"}))}
                />
            );
        default: 
            return <p>ERROR IN RENDERING</p>
    }
}

