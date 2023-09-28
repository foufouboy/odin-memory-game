import { styled } from "styled-components";
import Logo from "./../assets/burger-icon.png";
import Card from "./Card";
import SampleImg from "./../assets/sample-recipe.jpg";

export default function Game({difficulty}) {
    const cards = [];
    for (let i = 0; i < 5; i++) {
        cards.push(<Card 
            img={SampleImg} 
            name="A good recipe name"
        />);
    }

    return (
        <GameStyled>
            <header>
                <div className="logo">
                    <img src={Logo} alt="yummy yummy icon" />
                    <h1>Yummy Yummy Memory</h1>
                </div>
                <div className="score">
                    <p>Score: <span>2</span></p>
                    <p>Best score: <span>2</span></p>
                </div>
            </header>
            <main className="game">
                <div className="cards">
                    {cards}
                </div>
                <p className="cards-gotten"><span>2 </span> /8</p>
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
