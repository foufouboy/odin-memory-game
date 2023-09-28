import { styled } from "styled-components";
import WonImg from "./../assets/win.gif";
import LossImg from "./../assets/loss.gif";
import Button from "./styled/Button";
import CenteredContainer from "./styled/CenteredContainer";

export default function EndMenu({
    actualScore, 
    cardsNumber,
    startGame,
    quit
}) {
    const isWin = actualScore === cardsNumber;

    return (
        <CenteredContainer>
            <EndMenuStyled>
                <div className="result">
                    <h2>
                        {isWin ? (
                            "Congrats, you won!"
                        ) : (
                            "Oh, no! That's a loss..."
                        )}
                    </h2>
                    <img src={isWin ? WonImg : LossImg} alt="patrick eating burgers" />
                    <h3>Your final score is <span>{actualScore}</span> out of <span>{cardsNumber}</span></h3>
                </div>
                <div className="final-options">
                    <Button>Keep Playing</Button>
                    <Button onClick={startGame}>New Game</Button>
                    <Button onClick={quit}>Quit</Button>
                </div>
            </EndMenuStyled>
        </CenteredContainer>
    );
}

const EndMenuStyled = styled.div`
    background: var(--white); 
    border-radius: 15px;
    box-shadow: 1px 1px 10px rgba(100, 100, 100, .3);
    padding: 40px;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;

    .result {
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 15px;
        margin-bottom: 30px;
    }

    .final-options {
        display: flex;
        flex-flow: column;
        width: 100%;
        gap: 15px;
    }

    img {
        width: 100%;
        object-fit: contain;
    }

    h2 {
        color: var(--orange-red);
        font-size: 3rem;

    }

    h3 {
        font-size: 2rem;
        font-weight: normal;
        color: rgba(0, 0, 0, .8);

        span {
            color: var(--orange-red); 
        }
    }

    @media (max-width: 500px) {
        border-radius: 0;
    }
`
