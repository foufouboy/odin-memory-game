import { styled } from "styled-components";

export default function Card({img, name}) {
    return (
        <CardStyled>
            <img src={img} alt="recipe-image" />
            <p>{name}</p>
        </CardStyled>
    );
}

const CardStyled = styled.div`
    background: white;
    padding: 10px;
    box-shadow: var(--main-shadow);
    width: 190px;
    border-radius: 15px;
    font-family: "Lilita One";
    font-size: 1.3rem;
    text-align: center;
    // border: 1px solid var(--orange-red);
    cursor: pointer;

    p {
        padding: 3px;
    }

    img {
        width: 100%;
        border-radius: 15px;
    }

    @media (max-width: 750px) {
        width: max(25.5vw, 128px);
        font-size: 1.2rem;
    }

    @media (min-width: 1300px) {
        width: 220px;
    }
`;
