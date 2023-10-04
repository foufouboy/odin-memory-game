import { useState } from 'react'
import StartMenu from "./components/StartMenu";
import Game from "./components/Game";
import EndMenu from "./components/EndMenu";

export default function App() {
    const [gameState, setGameState] = useState({
        actualScreen: "start",
        difficulty: "easy",
        actualScore: 0,
        bestScore: 0,
        sessionScore: 0,
        inRun: 1,
    });

    const {
        actualScreen, 
        difficulty, 
        actualScore,
        sessionScore,
        inRun
    } = gameState;


    const cardsNumber = 
        difficulty === "hard" ? 12 :
        difficulty === "medium" ? 10 :
        8; // easy, default value


    const incrementInRun = () => {
        setGameState(prev => ({
            ...prev,
            inRun: prev.inRun + 1,
        }));
    }

    const startNewGame = (difficulty) => {
        setGameState(prev => ({
            ...prev, 
            actualScreen: "game",
            difficulty: difficulty,
            actualScore: 0,
            sessionScore: 0,
        }));
    }

    const continuePlaying = () => {
        setGameState(prev => ({
            ...prev,
            actualScreen: "game",
            sessionScore: 0, 
        }));
    }

    switch (actualScreen) {
        case "start" :
            return (
                <StartMenu 
                    startGameAs={startNewGame}
                />
            );
        case "game" :
            return (
                <Game 
                    difficulty={difficulty}
                    cardsNumber={cardsNumber}
                    gameState={gameState}
                    setGameState={setGameState}
                />
            );
        case "end" :
            return (
                <EndMenu
                    actualScore={actualScore}
                    sessionScore={sessionScore}
                    cardsNumber={cardsNumber}
                    inRun={inRun}
                    incrementInRun={incrementInRun}
                    continuePlaying={continuePlaying}
                    startGame={() => startNewGame(difficulty)}
                    quit={() => setGameState(prev => ({...prev, actualScreen: "start"}))}
                />
            );
        default: 
            return <p>ERROR IN RENDERING</p>
    }
}

