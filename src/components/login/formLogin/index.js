import style from "./../Login.module.css";
import iconNavigator from "../../../assert/img/iconNavigator.png";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderFieldLogin} from "../../../until/form";
import {Preloader} from "../../common/preloader";

const FormLogin = (props) => {
    const {handleSubmit, error, submitting} = props
    return (
        <form onSubmit={handleSubmit} className="cardMain"  style={{width:"100%", maxWidth: "320px"}}>
            <div className="cardBody">
                <div style={{marginBottom: "30px"}}><img className={style.formImg} src={iconNavigator} alt=""/></div>
                <Field placeholder="Логин" name="username" component={renderFieldLogin} type="text" />
                <Field placeholder="Пароль" name="password" component={renderFieldLogin} type="password"/>
                {error && <strong>{error}</strong>}
                {submitting && <Preloader/>}
                <button type="submit" className="btnNormal" disabled={submitting}>Войти</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(FormLogin)