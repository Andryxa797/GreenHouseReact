import React from "react";
import style from "../PersonalAccount.module.css";
import UploadPhotoForm from "./upload-photo";

const AboutUser = ({firstName, lastName, email, avatar, setPhotoProfileTC}) => {
    return (
        <div className={style.leftColumn}>
            <div className="cardMain">
                <div className="cardBody">
                    <UploadPhotoForm setPhotoProfileTC={setPhotoProfileTC} avatar={avatar}/>
                    <div className={style.titleName}>
                        {`${firstName} ${lastName}`}
                    </div>
                    <div className={style.subtitleName}>
                        {email}
                    </div>
                </div>
            </div>
        </div>

    )
}


export default AboutUser
