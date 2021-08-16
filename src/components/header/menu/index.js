import style from "../Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Menu = ({logoutAC, isLogin, firstName}) => {
    const unlogin = <><NavLink to="/register" className="link" href="#">Регистрация</NavLink> |
        <NavLink to="/login" className="link" href="#">Авторизация</NavLink> </>

    const login = <>Добропожаловать, <NavLink to="/lk" className="link" href="#">{firstName}</NavLink> |
        <NavLink to="/login" className="link" onClick={logoutAC}> Выход</NavLink> </>

    return (
        <div className={style.auth}>
            {isLogin ? login : unlogin}
        </div>
    )
}

export {Menu}