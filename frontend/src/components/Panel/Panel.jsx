import styled from "styled-components"
import { ButtonPanel } from "../ButtonPanel/ButtonPanel"
import LoginSVG from "../../assets/svg/login.svg?react"
import BasketSVG from "../../assets/svg/basket.svg?react"
import LogoutSVG from "../../assets/svg/logout.svg?react"
import { useNavigate } from "react-router"
import { postLogout } from "../../api"
import { Loader } from "../Loader/Loader"
import { useDispatch, useSelector } from "react-redux"
import { actionGlobalError, actionUser } from "../../actions"
import { useState } from "react"
import { selectorUser } from "../../selectors"
import { useFetchData } from "../../hooks"

const PanelContainer = ({ className }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(selectorUser) || localStorage.getItem("user")

    const { fetchData, isLoading } = useFetchData()

    const hadleClickLogout = () => {
        fetchData(postLogout, actionGlobalError, actionUser)
        localStorage.removeItem("user");
    }

    return (
        <div className={className}>
            {isLoading ? <Loader /> : <>
                {user
                    ?
                    <div className="block-logout">
                        <p className="user-name">{user.name}</p>
                        <ButtonPanel onClick={() => hadleClickLogout()} icon={<LogoutSVG />}>Выйти</ButtonPanel>
                    </div>
                    :
                    <ButtonPanel onClick={() => navigate("/login")} icon={<LoginSVG />}>Войти</ButtonPanel>
                }


                <ButtonPanel onClick={() => navigate("/basket")} icon={<BasketSVG />}>Корзина</ButtonPanel> {/* edit 123 - userId */}
            </>}

        </div>
    )
}

export const Panel = styled(PanelContainer)`
    display: flex;
    gap: 20px;

    .block-logout {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .user-name {
        font-weight: 600;
    }
`