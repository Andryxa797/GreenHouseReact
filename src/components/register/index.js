import React from 'react';
import style from './Register.module.css'
import FormRegister from "./form";
import {SubmissionError} from "redux-form";


const Register = ({registerTC}) => {
    const submit = async ({username, email, first_name, last_name, password}) => {
        const response = await registerTC(username, email, first_name, last_name, password)
        if (response.status !== 'OK') {
            throw new SubmissionError({...response.errors.data, _error: 'Что то пошло не так...'})
        }
    }
    return (
        <div className="container">
            <div className={style.containerInherit}>
                <FormRegister onSubmit={submit}/>
            </div>
        </div>
    )
}

export {Register}