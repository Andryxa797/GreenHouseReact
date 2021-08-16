import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "../Register.module.css";
import {email, maxLength25, minLength8, renderFieldLogin, required} from "../../../until/form";


const validate = values => {
    const errors = {}
    if (!values.username) errors.username = required(values.username)
    else errors.username = maxLength25(values.username)
    if (!values.email) errors.email = required(values.email)
    else errors.email = email(values.email)
    if (!values.first_name) errors.first_name = required(values.first_name)
    else errors.first_name = maxLength25(values.first_name)
    if (!values.last_name) errors.last_name = required(values.last_name)
    else errors.last_name = maxLength25(values.last_name)
    if (!values.password) errors.password = required(values.password)
    else errors.password = minLength8(values.password)
    if (!values.confirmPassword) errors.confirmPassword = required(values.confirmPassword)
    else if (values.confirmPassword !== values.password) errors.confirmPassword = 'Пароли различаются'
    return errors
}


const FormRegister = (props) => {
    const {handleSubmit, error, invalid, submitting, pristine} = props

    return (
        <form onSubmit={handleSubmit} className="cardMain" style={{width:"100%", maxWidth: "320px"}}>
            <div className="cardBody">
                <div className={style.formTitle}>Регистрация</div>
                <Field placeholder="Логин" name="username" component={renderFieldLogin} type="text"/>
                <Field placeholder="E-mail" name="email" component={renderFieldLogin} type="text"/>
                <Field placeholder="Имя" name="first_name" component={renderFieldLogin} type="text"/>
                <Field placeholder="Фамилия" name="last_name" component={renderFieldLogin} type="text"/>
                <Field placeholder="Пароль" name="password" component={renderFieldLogin} type="password"/>
                <Field placeholder="Подтверждение пароля" name="confirmPassword" component={renderFieldLogin} type="password" />
                {error && <strong>{error}</strong>}
                <button type="submit" className="btnNormal" disabled={invalid|| submitting || pristine}>Зарегистрироваться</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'register',
    validate
})(FormRegister)
