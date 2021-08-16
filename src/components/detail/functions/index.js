import React, {useState} from "react";
import style from './Functions.module.css'
import managementIcon from './../../../assert/img/management.png'
import dbIcon from './../../../assert/img/db.svg'
import plus from './../../../assert/img/plus.png'
import minus from './../../../assert/img/minus.png'
import {CardManagement} from "./card-management";
import {CardDataView} from "./card-data-view";


const CardTitle = ({icon, title, toggleButton, setToggleButton}) => {
    return (
        <div className={style.card__title}>
            <div className={style.flexContainer} onClick={() => setToggleButton(!toggleButton)}>
                <div><img className={style.card__img} src={icon} alt=""/></div>
                <div className={style.title}>{title}</div>
            </div>
            <img onClick={() => setToggleButton(!toggleButton)} className={style.toggleImg} src={toggleButton ? minus : plus} alt=""/>
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
        return toggleButtonDataView && tariffPlan && tariffPlan[value] ? <CardDataView title={title} link={link} icon={icon}/> : null
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
                    {cardDataViewHeader(['number_sensors_temperature_air'], 'Температура воздуха', '/temperature_air')}
                    {cardDataViewHeader(['number_sensors_temperature_soil'], 'Температура почвы', '/temperature_soil')}
                    {cardDataViewHeader(['number_sensors_humidity_air'], 'Влажность воздуха', '/humidity_air')}
                    {cardDataViewHeader(['number_sensors_humidity_soil'], 'влажность почвы', '/humidity_soil')}
                    {cardDataViewHeader(['number_windows_open'], 'Управляемые окна', '/windows_open')}
                    {cardDataViewHeader(['number_heaters'], 'Управляемые обогреватели', '/heaters')}
                    {cardDataViewHeader(['number_additional_loads'], 'Дополнительные нагрузки', '/additional_loads')}
                </CardBody>
            </div>
        </div>
    )
}

export {Functions}