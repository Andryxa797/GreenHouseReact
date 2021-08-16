import React from "react";
import style from './Form.module.css'

export const required = value => value ? undefined : 'Обязательное поле'
export const maxLength = max => value => value && value.length > max ? `Максимум ${max} символов` : undefined
export const maxLength25 = maxLength(25)
export const maxLength15 = maxLength(15)
export const number = value => value && isNaN(Number(value)) ? 'Только цифры' : undefined
export const minValue = min => value => value && value < min ? `Минимальное количество символов ${min}` : undefined
export const minLength8 = minValue(8)
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неправильный E-mail адрес' : undefined


export const renderFieldLogin = ({input, label, type, meta: {touched, error, warning}, placeholder, ...props}) => {

    const listError = (errors) => {
        if (Array.isArray(errors)) return errors.map((message) => <li>{message}</li>)
        else return <li>{errors}</li>
    }
    return (<>
        <div className={style.fieldRow}>
            <label>{label}</label>
            <div>
                <input className={style.input} {...input} placeholder={label || placeholder} type={type}/>
                {touched && ((error && <ul>{listError(error)}</ul>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </>)
}

export const renderFieldProfile = ({input, label, type, meta: {touched, error, warning}, placeholder}) => {
    return (<>
        <div className={style.fieldRow}>
            <div className={style.containerLabel}>
                <label className={style.label}>{label}</label>
            </div>
            <div>
                <input className={style.input} {...input} placeholder={placeholder} type={type}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </>)

}
export const renderFieldCheckBox = ({input, label, type, meta: {touched, error, warning}, placeholder}) => {
    return (
        <div style={{textAlign: "left", marginBottom: "10px"}}>
            <label>{label}</label>
            <input {...input} placeholder={placeholder} type={type}/>
        </div>)

}