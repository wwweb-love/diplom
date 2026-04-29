import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AuthRegister } from "../../components"

const RegisterSchema = yup.object().shape({
    name: yup
        .string()
        .required("Заполните имя")
        .matches(/^\w+$/, "Неверное имя. Допускаются буквы и цифры")
        .min(3, "Неверное имя. Допускается минимум 3 символа")
        .max(20, "Неверное имя. Допускается максимум 20 символов"),
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

const htmlInfo = { formTitle: "Регистрация", pageToOtherForm: "login", btnTitle: "Зарегистрироваться", linkTitle: "Авторизоваться" }



const RegistrationContainer = ({ className }) => {

    const formHook = useForm({
        defaultValues: {
            name: "",
            login: "",
            password: ""
        },
        resolver: yupResolver(RegisterSchema)
    })

    return (
        <div className={className}>
            <AuthRegister htmlInfo={htmlInfo} formHook={formHook} />
        </div>
    )
}

export const Registration = styled(RegistrationContainer)`
        
`