import React, {useEffect, useState} from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import menuIcon from './../../assert/img/iconMenu.svg'
import closeIcon from './../../assert/img/iconClose.svg'
import {useMediaQuery} from "react-responsive";
import {Menu} from "./menu";


const Header = ({logoutAC, isLogin, firstName}) => {
    const menu = <Menu logoutAC={logoutAC} isLogin={isLogin} firstName={firstName}/>
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 940px)'})
    const [isHeaderNarrow, setIsHeaderNarrow] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const scrollHandler = () => {
        (Math.abs(document.body.getBoundingClientRect().top) > 90) ?
            setIsHeaderNarrow(true) : setIsHeaderNarrow(false)
    }
    useEffect(() => {
        if (isDesktopOrLaptop) setIsOpenMenu(false);
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    });


    return (
        <header className={isHeaderNarrow ? style.header + ' ' + style.headerNarrow : style.header}>
            <div className="container">
                <div className="container-inherit">
                    <div className={style.logo}><NavLink to="/">GreenHouse</NavLink></div>
                    {isDesktopOrLaptop && menu}
                    {!isDesktopOrLaptop &&
                    <img onClick={() => setIsOpenMenu(!isOpenMenu)} className={style.menuIcon}
                         src={isOpenMenu ? closeIcon : menuIcon} alt=""/>
                    }
                </div>
                {isOpenMenu && menu}
            </div>
        </header>
    )
}

export {Header}