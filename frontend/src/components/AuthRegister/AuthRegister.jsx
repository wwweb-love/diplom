import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router"

const AuthRegisterContainer = ({ className, formTitle, btnTitle, pageToOtherForm, linkTitle }) => {
    const navigate = useNavigate()
    
    return (
        <div className={className}>
            <form className="form-login">
                <p className="form-title">{formTitle}</p>
                <div className="block-label-inp">
                    <label>Login</label>
                    <input type="text" />
                </div>

                <div className="block-label-inp">
                    <label>Password</label>
                    <input type="password" />
                </div>

                <div className="block-action">
                    <button>{btnTitle}</button>
                    <p onClick={() => navigate(`/${pageToOtherForm}`)} className="link-redirect">{linkTitle}</p>
                </div>
            </form>
        </div>
    )
}

export const AuthRegister = styled(AuthRegisterContainer)`

    width: 100%;
    height: 80vh;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        border-radius: 20px;
        padding: 20px 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px; 
        width: 450px;
        height: auto;
        background-color: white;
    }

    .form-title {
        font-size: 22px;
    }

    .block-label-inp {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    label {
        font-size: 18px;
        font-weight: 600;
    }
        
    input {
        margin: 0px 10px;
        font-size: 16px;
        padding: 5px 17px;
        border-radius: 10px;
        border: 2px solid silver;
    }

    input:focus {
        outline: 0;
        border: 2px solid white;
        box-shadow: 1px 1px 10px #005bff;
    }

    .block-action {
        padding: 0 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    button {
        width: 100%;
        background-color: #005bff;
        color: #fff;
        font-size: 18px;
        padding: 5px;
        border: 0;
        border-radius: 50px;
        cursor: pointer;
    }

    .link-redirect {
        text-decoration: underline;
        cursor: pointer;
    }
`