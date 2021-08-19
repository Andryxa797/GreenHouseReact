import React, {useState} from "react";
import style from './About.module.css'
import img from './../../../assert/img/grass.jpg'
import {TariffPlanTable} from "./trafic-plan-table";


const DescriptionTableRow = (value, text) => {
    return value ? (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    ) : null
}

const About = ({profile, tariffPlan}) => {
    return (
        <div className="container">
            <div className={style.cardContainer}>
                <div className={style.card__left}>
                    <div><img className={style.card__left__img} src={profile && profile.avatar} alt=""/></div>
                    <div className={style.title}>
                        {profile && profile.name_greenhouse}
                    </div>
                </div>
                <div className={style.card__right}>
                    <div className={style.titleTable}>Описание</div>
                    <table className="table">
                        {profile && DescriptionTableRow(profile.number_telephone, 'Номер телофона:')}
                        {profile && DescriptionTableRow(profile.country, 'Страна:')}
                        {profile && DescriptionTableRow(profile.city, 'Город:')}
                        {profile && DescriptionTableRow(profile.address, 'Адрес:')}
                        <TariffPlanTable tariffPlan={tariffPlan}/>
                    </table>
                </div>
            </div>
        </div>
    )
}

export {About}