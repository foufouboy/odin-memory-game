import { styled } from "styled-components";
import AppIcon from "./../assets/burger-icon.png";

export default function StartMenu({startGame}) {
    return (
        <StartMenuStyled>
            <img src={AppIcon} alt="burger app icon" />
            <h1 className="title">Yummy Yummy Memory</h1>
            <h2 className="phrase">Are you ready to get hungry ?</h2>
            <div className="difficulty">
                <button 
                    onClick={e => startGame(e)}
                    value="easy"
                >
                    Easy
                </button>
                <button 
                    onClick={e => startGame(e)}
                    value="medium"
                >
                    Medium
                </button>
                <button 
                    onClick={e => startGame(e)}
                    value="hard"
                >
                    Hard
                </button>
            </div>
        </StartMenuStyled>
    );
}

const StartMenuStyled = styled.div`
    background: var(--white); 
    border-radius: 15px;
    box-shadow: 1px 1px 10px rgba(100, 100, 100, .3);
    padding: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;

    .title {
        font-family: "Lilita One";
        color: var(--orange-red);
        letter-spacing: 2px;
        font-size: 2.5rem;
        margin-bottom: 5px;
    }

    .phrase {
        letter-spacing: 1px;
        color: rgb(0, 0, 0, .8);
        font-style: italic;
        margin-bottom: 40px;
    }

    .difficulty {
        display: flex;
        gap: 15px;
    }

    img {
        height: 80px;
        margin-bottom: 20px;
    }

    button {
        background: var(--orange-red);
        border: 0;
        color: white;
        font-family: inherit;
        font-weight: 700;
        font-size: 2rem;
        padding: 5px 15px;
        border-radius: 7px;
        box-shadow: 1px 2px 5px rgba(100, 100, 100, .5);
        cursor: pointer;
        
        &:hover {
            background: var(--orange-red-hover);             
        }

        &:active {
            background: var(--orange-red-active); 
        }
    }

    @media (max-width: 500px) {
        border-radius: 0;

        .difficulty {
            flex-flow: column;
            width: 100%;
        }
    }

    @media (min-width: 1150px) {
        .title {
            font-size: 4rem; 
        }

        .phrase {
            font-size: 2rem; 
        }

        .difficulty {
            gap: 30px;
        }

        button {
            font-size: 2.3rem; 
        }

        img {
            height: 110px; 
        }
    }
`
