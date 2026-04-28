import styled from "styled-components"
import { ButtonPanel } from "../ButtonPanel/ButtonPanel"
import LoginSVG from "../../assets/svg/login.svg?react"
import BasketSVG from "../../assets/svg/basket.svg?react"
import { useNavigate } from "react-router"

const PanelContainer = ({ className }) => {
    
    const navigate = useNavigate()

    return (
        <div className={className}>
            <ButtonPanel onClick={() => navigate("/login")} icon={<LoginSVG />}>Войти</ButtonPanel>
            <ButtonPanel onClick={() => navigate("/basket/123")} icon={<BasketSVG />}>Корзина</ButtonPanel> {/* edit 123 - userId */}
        </div>
    )
}

export const Panel = styled(PanelContainer)`
    display: flex;
    gap: 20px;
`