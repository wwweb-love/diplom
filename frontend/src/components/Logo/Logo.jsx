import styled from "styled-components"
import LogoSVG from "../../assets/svg/logo.svg?react"

const LogoContainer = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <LogoSVG />
        </div>
    )
}

export const Logo = styled(LogoContainer)`
    cursor: pointer;
    display: flex;
    align-items: center;
`