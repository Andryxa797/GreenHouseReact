import React from "react";
import ProfileForm from "./form";
import style from "../PersonalAccount.module.css";
import {SubmissionError} from "redux-form";

const SettingUserProfile = ({setUserProfileTC, ...props}) => {
    const submit = async (dataForm) => {
        const response = await setUserProfileTC(dataForm)
        if (response !== 'Error') window.alert(`Данные успешно сохранились`)
        else throw new SubmissionError({_error: 'Произошла ошибка, попробеуйте позже!'})
    }

    return (
        <div className={style.rightColumn}>
            <div className="card">
                <div className="cardInherit">
                    <div className="cardHeader">
                        Настройки пользователя
                    </div>
                    <div className="cardBody">
                        <ProfileForm {...props} onSubmit={submit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {SettingUserProfile}