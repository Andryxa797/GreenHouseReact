import style from './Preloader.module.css'
import React from "react";

const Preloader = () => {
    return <div className={style.preloader}>
        <div className={style.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
}

export {Preloader}