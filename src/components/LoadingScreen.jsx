import { styled } from "styled-components";
import Logo from "./../assets/burger-icon.png"

export default function LoadingScreen() {
    return (
        <LoadingScreenStyled>
            <img src={Logo} alt="loading image" />
        </LoadingScreenStyled>
    );
}

const LoadingScreenStyled = styled.div`
    background: white;
    z-index: 5;
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100px;
        animation-name: burger-whooping;
        animation-iteration-count: infinite;
        animation-duration: 1.2s;
        animation-timing-function: ease;
    }

    @keyframes burger-whooping {
        from {
            transform: rotate(0);
        }

        50% {
            opacity: .5; 
        }

        to {
            transform: rotate(360deg);
            opacity: 1;
        }
    }

    @media (min-width: 1000px) {
        img {
            width: 130px; 
        }
    }
`
