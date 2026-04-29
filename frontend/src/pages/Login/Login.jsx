import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AuthRegister } from "../../components"


const AuthSchema = yup.object().shape({
    login: yup
        .string()
        .required("Заполните логин")
        .matches(/^\w+$/, "Неверный логин. Допускаются буквы и цифры")
        .min(3, "Неверный логин. Допускается минимум 3 символа")
        .max(20, "Неверный логин. Допускается максимум 20 символов"),
    password: yup
        .string()
        .required("Заполните пароль")
        .matches(/^\w+$/, "Неверный пароль. Допускаются буквы и цифры")
        .min(3, "Неверный пароль. Допускается минимум 3 символа")
        .max(20, "Неверный пароль. Допускается максимум 20 символов")
})

const htmlInfo = { formTitle: "Авторизация", pageToOtherForm: "registration", btnTitle: "Войти",  linkTitle: "Зарегистрироваться" }

const LoginContainer = ({ className }) => {

    const formHook = useForm({
        defaultValues: {
            login: "",
            password: ""
        },
        resolver: yupResolver(AuthSchema)
    })

    return (
        <div className={className}>
            <AuthRegister htmlInfo={htmlInfo} formHook={formHook} />
        </div>
    )
}

export const Login = styled(LoginContainer)`
        
`