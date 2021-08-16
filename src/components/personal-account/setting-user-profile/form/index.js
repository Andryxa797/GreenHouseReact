import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength15, renderFieldCheckBox, renderFieldProfile} from "../../../../until/form";
import {connect} from "react-redux";

let ProfileForm = (props) => {
    const {handleSubmit, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field label="Страна:" placeholder={"Страна"} name="country" component={renderFieldProfile} type="text"
                   validate={[maxLength15]}/>
            <Field label="Город:" placeholder={"Город"} name="city" component={renderFieldProfile} type="text"/>
            <Field label="Адрес:" placeholder={"Адрес"} name="address" component={renderFieldProfile} type="text"/>
            <Field label="Название теплицы:" placeholder={"Название теплицы"} name="nameGreenhouse" component={renderFieldProfile}
                   type="text"/>
            <Field label="Номер телефона:" placeholder={"Номер телефона"} name="numberTelephone" component={renderFieldProfile}
                   type="text"/>
            <Field  label="Аннонимный аккаунт: " name="isAnonymousAccount" component={renderFieldCheckBox} type="checkbox"/>
            {error && <strong>{error}</strong>}
            <button className="btnNormal" type="submit">Сохранить изменения</button>
        </form>
    )
}


ProfileForm = reduxForm({
    form: 'login',
    enableReinitialize: true
})(ProfileForm)

export default connect(
    state => ({
        initialValues: state.profile // pull initial values from account reducer
    }),
)(ProfileForm)