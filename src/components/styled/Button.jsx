import { styled } from "styled-components";

export default function Button({children, onClick, value}) {
    return (
        <StyledButton value={value} onClick={onClick} className="red-btn">
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
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
`
