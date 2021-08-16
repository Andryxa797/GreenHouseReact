import React from "react";
import style from './About.module.css'
import img from './../../../assert/img/grass.jpg'

const TariffPlanTable = ({tariffPlan}) => {
    const rowTable = (value, text) => value ? <div>{text} - {value} шт</div> : null
    return tariffPlan ? (
        <tr>
            <td>Доступно:</td>
            <td className={style.table_list}>
                {rowTable(tariffPlan.number_sensors_temperature_air, 'Д. температуры воздуха')}
                {rowTable(tariffPlan.number_sensors_temperature_soil, 'Д. температуры почвы')}
                {rowTable(tariffPlan.number_sensors_humidity_air, 'Д. влажности воздуха')}
                {rowTable(tariffPlan.number_sensors_humidity_soil, 'Д. влажность почвы')}
                {rowTable(tariffPlan.number_windows_open, 'Управляемые окна')}
                {rowTable(tariffPlan.number_pumps, 'Управляемые насосы')}
                {rowTable(tariffPlan.number_heaters, 'Управляемые обогреватели')}
                {rowTable(tariffPlan.number_additional_loads, 'Дополнительные нагрузки')}
            </td>
        </tr>
    ) : null

}

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
                    <div className={style.titleTable}>
                        Описание
                    </div>
                    <table className="table">
                        {profile && DescriptionTableRow(profile.number_telephone, 'Номер телофона:')}
                        {profile && (profile.country || profile.city || profile.address) &&
                        DescriptionTableRow(`${profile.country} ${profile.city} ${profile.address}`, 'Адресс:')}
                        <TariffPlanTable tariffPlan={tariffPlan}/>
                    </table>
                </div>
            </div>
        </div>
    )
}

export {About}