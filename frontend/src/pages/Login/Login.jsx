import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AuthRegister } from "../../components"

const LoginContainer = ({ className }) => {



    return (
        <div className={className}>
            <AuthRegister formTitle="Авторизация" pageToOtherForm="registration" btnTitle="Войти"  linkTitle="Зарегистрироваться"   />
        </div>
    )
}

export const Login = styled(LoginContainer)`
        
`