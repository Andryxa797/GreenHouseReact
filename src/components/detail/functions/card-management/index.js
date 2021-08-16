import React from "react";
import style from './CardManagement.module.css'


const CardManagement = () => {
    return (
        <div className={style.managementCard}>
            <div className={style.title}>Открытия окна #2</div>
            <div className={style.cardRow}>
                <div className={style.station}>Текущее состояния:</div>
                <span>Открыто</span>
            </div>
            <div className={style.cardRow}>
                <div>Процент открытия окна:</div>
                <input className={style.inputNumber} type="number" value="10"/>
            </div>
            <div className={style.cardRow}>
                <div>Время открытия окна (мин):</div>
                <input className={style.inputNumber} type="number" value="10"/>
            </div>
            <button className="btnSmall">
                Открыть окно
            </button>
        </div>
    )
}

export {CardManagement}