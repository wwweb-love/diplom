import styled from "styled-components"
import LogoSVG from "../../assets/svg/logo.svg?react"

const LogoContainer = ({ className }) => {
    return (
        <div className={className}>
            <LogoSVG />
        </div>
    )
}

export const Logo = styled(LogoContainer)`
    cursor: pointer;
    display: flex;
    align-items: center;
`