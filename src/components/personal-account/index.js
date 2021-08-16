import React, {useEffect} from "react";
import style from './PersonalAccount.module.css'
import {SettingUserProfile} from "./setting-user-profile";
import AboutUser from "./about-user-profile";

const PersonalAccount = ({getUserProfileTC, setPhotoProfileTC, setUserProfileTC, ...props}) => {
    useEffect(() => getUserProfileTC(), [])
    return (
        <div className="container">
            <div className={style.containerInherit}>
                <AboutUser firstName={props.firstName} lastName={props.lastName} email={props.email}
                           avatar={props.avatar} setPhotoProfileTC={setPhotoProfileTC}/>
                <SettingUserProfile {...props} setUserProfileTC={setUserProfileTC}/>
            </div>
        </div>
    )
}

export {PersonalAccount}