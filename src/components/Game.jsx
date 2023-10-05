import { styled } from "styled-components";
import Logo from "./../assets/burger-icon.png";
import Card from "./Card";
import LoadingScreen from "./LoadingScreen";
import apiLink from "./../api-connection";
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";

// Par facilité, je donne le setGameState directement,
// mauvaise pratique. Il faut ENCAPSULER

export default function Game(
    {difficulty, 
    cardsNumber, 
    gameState,
    setGameState,
    quit}) {
    const [cards, setCards] = useState([]);
    const [slotCards, setSlotCards] = useState([]);

    const slotsCardsNumber = 
        difficulty === "hard" ? 5 :
        difficulty === "medium" ? 4 :
        3;
    const { actualScore, 
            sessionScore,
            bestScore,
            loading, 
    } = gameState;

    const setLoading = (value) => {
        setGameState(prev => ({...prev, loading: value}));
    }

    const updateScores = () => {
        if (actualScore + 1 > bestScore) {
            setGameState(prev => ({...prev, bestScore: actualScore + 1})); 
        }

        setGameState(prev => ({
                ...prev, 
                actualScore: actualScore + 1,
                sessionScore: sessionScore + 1,
            }));
    }

    const checkCard = (id) => {
        setCards(cards.map(card => {
            if (card.id === id) 
                card.checked = true;
            return card;
        }));
    }

    const cardClick = (id) => {
        const cardChecked = cards.find(card => card.id === id); 
        const allCardsChecked = cards.every(card => {
            return card.id !== id ?
                card.checked :
                true;
        });

        if (cardChecked.checked) {
            setGameState(prev => ({...prev, actualScreen: "end"}));
        } else {

            checkCard(id);
            updateScores();

            if (allCardsChecked) {
                setGameState(prev => ({...prev, actualScreen: "end"}));
                return;
            }

            getNewTurn();
        }
    }

    const fetchData = async () => {
        const headers = {
            "Content-type": "application/json"
        };
        setLoading(true);

        try {
            const response = await fetch(apiLink, headers);
            const data = await response.json();

            const recipes = data.hits;
            const newCards = [];

            console.log(recipes);

            for (let i = 0; i < cardsNumber; i++) {
                newCards.push({
                    name: recipes[i].recipe.label,
                    image: recipes[i].recipe.image,
                    checked: false,
                    id: uuidv4(),
                });
            }

            setCards(newCards);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    const isAlreadyIn = (cards, id) => {
        return cards.some(card => card.id === id);
    }

    const getNewTurn = () => {
        if (cards.length === 0) return;

        const newCards = [];
        let checked = 0;

        while(newCards.length < slotsCardsNumber) {
            const randomIndex = ~~(Math.random() * cardsNumber);
            const randomCard = cards[randomIndex];

            if (!(randomCard.checked && 
                checked >= slotsCardsNumber - 1) &&
                !isAlreadyIn(newCards, randomCard.id)) {
                newCards.push(randomCard);
                checked += +randomCard.checked;
            }
        }
        setSlotCards(newCards);
    }

    useEffect(() => {fetchData()}, []);
    useEffect(() => {getNewTurn()}, [cards])

    return (
        <GameStyled>
            { loading && <LoadingScreen/>}
            <header>
                <div className="logo" onClick={quit}>
                    <img src={Logo} alt="yummy yummy icon" />
                    <h1>Yummy Yummy Memory</h1>
                </div>
                <div className="score">
                    <p>Score: <span>{actualScore}</span></p>
                    <p>Best score: <span>{bestScore}</span></p>
                </div>
            </header>
            <main className="game">
                <div className="cards">
                    {slotCards.map((e) => (
                        <Card 
                            img={e.image} 
                            name={e.name}
                            key={e.id}
                            id={e.id}
                            cardClick={cardClick}
                        />
                    ))}
                </div>
                <p className="cards-gotten">
                    <span>{sessionScore}</span>
                / {cardsNumber}</p>
            </main>
        </GameStyled>
    );
}

const GameStyled = styled.div`
    margin-bottom: 50px;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 40px;

        h1 {
            color: var(--orange-red);
            font-size: 2rem;
            max-width: 300px;
            text-shadow: 2px 2px black;
        }

        img {
            height: 110px; 
        }

        .logo {
            display: flex;
            gap: 15px;
            align-items: center;
            cursor: pointer;
        }

        .score {
            background: white;
            border-radius: 15px;
            padding: 20px;
            border: 7px solid var(--orange-red);
            color: var(--orange-red);
            box-shadow: var(--main-shadow);
            font-family: "Lilita One";
            font-size: 1.8rem;

            span {
                margin-left: 5px;
                color: var(--blue); 
            }
        }
    }

    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        padding: 50px;
        transition: transform .7s ease;

    }

    .cards-gotten {
        display: flex; 
        justify-content: center;
        font-family: "Lilita One";
        font-size: 2.5rem;
        color: var(--orange-red);
        letter-spacing: 5px;
        text-shadow: 2px 2px black;
         
        // span {
        //     color: var(--blue); 
        // }
    }

    @media (max-width: 750px) {
        header {
            flex-flow: column;  
            gap: 25px;

            h1 {
                display: none;
            }
        }

        .cards {
            padding-top: 10px;    
        }
    }
    
    @media (min-width: 1300px) {
        .cards {
            margin-top: 100px;
        }    
    }
`
