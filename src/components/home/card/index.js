import style from "../Home.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import img from './../../../assert/img/meeting.jpg'

const Card = ({id, name, avatar}) =>{
    return(
        <div className={style.card}>
            <div className={style.card__img}><NavLink to={"detail/" + id}><img src={avatar} alt=""/></NavLink></div>
            <div className={style.card__title}><NavLink to="detail/1">{name}</NavLink></div>
            <div className={style.card__subtitle}>Краткое описание для теплице</div>
        </div>
    )
}

export {Card}