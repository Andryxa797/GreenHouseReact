import React, {useState} from "react";
import style from './Functions.module.css'
import managementIcon from './../../../assert/img/management.png'
import dbIcon from './../../../assert/img/db.svg'
import plus from './../../../assert/img/plus.png'
import minus from './../../../assert/img/minus.png'
import {CardManagement} from "./card-management";
import {CardDataView} from "./card-data-view";
import {routePath} from "../../../common/route/route";


const CardTitle = ({icon, title, toggleButton, setToggleButton}) => {
    return (
        <div className={style.card__title}>
            <div className={style.flexContainer} onClick={() => setToggleButton(!toggleButton)}>
                <div><img className={style.card__img} src={icon} alt=""/></div>
                <div className={style.title}>{title}</div>
            </div>
            <img onClick={() => setToggleButton(!toggleButton)} className={style.toggleImg}
                 src={toggleButton ? minus : plus} alt=""/>
        </div>)
}

const CardBody = ({icon, title, toggleButton, setToggleButton, children}) => {
    return (
        <div className={style.card}>
            <CardTitle icon={icon} title={title} toggleButton={toggleButton} setToggleButton={setToggleButton}/>
            <div className={style.card__body}>
                {children}
            </div>
        </div>
    )
}

const Functions = ({tariffPlan}) => {
    const [toggleButtonManage, setToggleButtonManage] = useState(false)
    const [toggleButtonDataView, setToggleButtonDataView] = useState(false)

    const cardDataViewHeader = (value, title, link, icon) => {
        return toggleButtonDataView && tariffPlan && tariffPlan[value] ?
            <CardDataView title={title} link={link} icon={icon}/> : null
    }

    return (
        <div className="container">
            <div className={style.cardContainer}>
                <CardBody icon={managementIcon} title='Управление системами' toggleButton={toggleButtonManage}
                          setToggleButton={setToggleButtonManage}>
                    {toggleButtonManage && <CardManagement/>}
                    {toggleButtonManage && <CardManagement/>}
                    {toggleButtonManage && <CardManagement/>}
                    {toggleButtonManage && <CardManagement/>}
                </CardBody>

                <CardBody icon={dbIcon} title='Просмотр данных' toggleButton={toggleButtonDataView}
                          setToggleButton={setToggleButtonDataView}>
                    {cardDataViewHeader(['number_sensors_temperature_air'], 'Температура воздуха', `/${routePath.DataParams.temperatureAir}`)}
                    {cardDataViewHeader(['number_sensors_temperature_soil'], 'Температура почвы', `/${routePath.DataParams.temperatureSoil}`)}
                    {cardDataViewHeader(['number_sensors_humidity_air'], 'Влажность воздуха', `/${routePath.DataParams.humidityAir}`)}
                    {cardDataViewHeader(['number_sensors_humidity_soil'], 'влажность почвы', `/${routePath.DataParams.humiditySoil}`)}
                    {cardDataViewHeader(['number_pumps'], 'Водянные насосы', `/${routePath.DataParams.pumps}`)}
                    {cardDataViewHeader(['number_windows_open'], 'Управляемые окна', `/${routePath.DataParams.windowStatus}`)}
                    {cardDataViewHeader(['number_heaters'], 'Управляемые обогреватели', `/${routePath.DataParams.heaters}`)}
                    {cardDataViewHeader(['number_additional_loads'], 'Дополнительные нагрузки', `/${routePath.DataParams.additionalLoad}`)}
                </CardBody>
            </div>
        </div>
    )
}

export {Functions}