import React from 'react'
import style from './Footer.module.css'
import iconVk from './../../assert/img/icon-vk.png'
import iconTelegram from './../../assert/img/icon-telegram.png'
import iconInstagram from './../../assert/img/icon-instagram.png'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footer__link}>
                    <div className={style.footer__linkIcon}>
                        <img src={iconInstagram} alt=""/>
                    </div>
                    <div className={style.footer__linkIcon}>
                        <img src={iconVk} alt="" />
                    </div>

                    <div className={style.footer__linkIcon}>
                        <img src={iconTelegram} alt=""/>
                    </div>
                </div>
                <div className={style.footer__linkAbout}>
                    <span>О нас</span>
                </div>
                <div className={style.footer__copyright}>
                    GreenHouse © 2021
                </div>
            </div>
        </footer>)
}
export {Footer}