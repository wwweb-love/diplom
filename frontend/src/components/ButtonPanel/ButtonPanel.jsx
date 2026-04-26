import styled from "styled-components"

const ButtonPanelContainer = ({ className, icon, children }) => {
    return (
        <button className={className}>
            {icon}
            {children}
        </button>
    )
}

export const ButtonPanel = styled(ButtonPanelContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
`