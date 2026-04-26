import styled from "styled-components"
import { ButtonPanel } from "../ButtonPanel/ButtonPanel"
import LoginSVG from "../../assets/svg/login.svg?react"
import BasketSVG from "../../assets/svg/basket.svg?react"

const PanelContainer = ({ className }) => {
    return (
        <div className={className}>
            <ButtonPanel icon={<LoginSVG />}>Войти</ButtonPanel>
            <ButtonPanel icon={<BasketSVG />}>Корзина</ButtonPanel>
        </div>
    )
}

export const Panel = styled(PanelContainer)`
    display: flex;
    gap: 20px;
`