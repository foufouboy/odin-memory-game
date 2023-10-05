import { styled } from "styled-components";

export default function Card({img, name, id, cardClick}) {
    return (
        <CardStyled onClick={() => cardClick(id)}>
            <div className="card-inner">
                    <img src={img} alt="recipe-image" />
                    <p>{name}</p>
            </div>
        </CardStyled>
    );
}

const CardStyled = styled.div`
    background: white;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    padding: 10px;
    box-shadow: var(--main-shadow);
    width: 190px;
    border-radius: 15px;
    font-family: "Lilita One";
    font-size: 1.3rem;
    text-align: center;
    // border: 1px solid var(--orange-red);
    cursor: pointer;
    transition: .8s transform ease;
    
    &.hidden {
        transform: translateY(-700px);
    }

    p {
        flex-grow: 1;
        padding: 3px;
        margin-right: auto;
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
        width: 250px;
        font-size: 1.5rem;
        
        p {
            padding: 5px; 
        }
    }
`;
