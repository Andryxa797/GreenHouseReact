import React from 'react';
import style from './Login.module.css'
import FormLogin from "./formLogin";
import {SubmissionError} from "redux-form";


const Login = ({loginTC}) => {
    const loginSubmit = async (values) => {
        const error = await loginTC(values.username, values.password)
        if(error.status === 'Error')  throw new SubmissionError({ _error: 'Что то пошло не так!' });
    }

    return (
        <div className="container">
            <div className={style.loginForm}>
                <FormLogin onSubmit={loginSubmit}/>
            </div>
        </div>
    )
}

export {Login}