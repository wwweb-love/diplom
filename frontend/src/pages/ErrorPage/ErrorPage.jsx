import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectorGlobalError } from "../../selectors"
import SadErrorsSVG from "../../assets/svg/sad-errors.svg?react"
import { ErrorMessage } from "../../components"

const ErrorPageContainer = ({ className }) => {

    const globalError = useSelector(selectorGlobalError)

    return (
        <div className={className}>
            <SadErrorsSVG />
            <div className="info">
                <h2>Ошибка</h2>
                <p>Проблемы на сервере. <span className="underline">Повторите попытку позже</span></p>
                <p>Сообщение от сервера: <ErrorMessage errorMessage={globalError} /></p>
            </div>
        </div>
    )
}

export const ErrorPage = styled(ErrorPageContainer)`

    width: 100%;
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 200px;
        height: 300px;
    }

    .info {
        width: 500px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 20px;
    }

    .underline {
        text-decoration: underline;
    }
        
`