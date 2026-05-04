import styled from "styled-components"

const ButtonContainer = ({ className, children }) => {
    return (
        <button className={className}>{children}</button>
    )
}

export const Button = styled(ButtonContainer)`
    padding: 10px 15px;
    font-size: 16px;
    background-color: #ffffff;
    color: black;
    border: 1px solid #005bff;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`