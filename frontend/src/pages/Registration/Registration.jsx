import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AuthRegister } from "../../components"

const RegistrationContainer = ({ className }) => {


    return (
        <div className={className}>
            <AuthRegister formTitle="Регистрация" pageToOtherForm="login" btnTitle="Зарегистрироваться" linkTitle="Авторизоваться" />
        </div>
    )
}

export const Registration = styled(RegistrationContainer)`
        
`