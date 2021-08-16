import React from 'react';
import style from './Home.module.css'
import {Card} from "./card";

const titlePage = (
    <div className={style.wrapper}>
        <div className="container">
            <div className={style.title}>ТЕПЛИЦЫ</div>
            <div className={style.subtitle}>Мы заботимся о вашем урожае.</div>
        </div>
    </div>)


const Home = ({greenhousesProfile}) => {
    return (
        <>
            {titlePage}
            <div className="container">
                <div className={style.content}>
                    {greenhousesProfile && greenhousesProfile.map(item => <Card id={item.user} name={item.name_greenhouse} avatar={item.avatar}/>)}
                </div>
            </div>
        </>
    )
}

export {Home}