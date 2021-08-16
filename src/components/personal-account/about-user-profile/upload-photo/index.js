import React, {useState} from "react";
import style from "./../../PersonalAccount.module.css";
import img from "../../../../assert/img/meeting.jpg";
import {Preloader} from "../../../common/preloader";

const Photo = ({setPhotoProfileTC, avatar}) => {

    const fileInput = React.createRef();
    const [isSelectedPhoto, setIsSelectedPhoto] = useState(false)

    let button = <button className="btnNormal">Загрузить на сайт</button>
    let label = <label className="btnNormal" htmlFor="file">Выбрать фото</label>

    const uploadPhoto = (event) => {
        event.preventDefault();
        let response = setPhotoProfileTC(fileInput.current.files[0])
        if (response === 'Error') alert('Ошибка зашрузки фото')
        setIsSelectedPhoto(false)
    }

    const checkUploadPhoto = (event) => {
        if (event.target.files.size !== 0) {
            setIsSelectedPhoto(true)
        }
    }

    return (<>
            <div className={style.photo}>
                {!avatar ? <Preloader/> : <img className={style.photo} src={avatar} alt=""/>}
            </div>
            <form style={{marginBottom: "10px"}} onSubmit={uploadPhoto}>
                <input onChange={checkUploadPhoto} type="file" id="file" accept="image/*" name="avatar" className={style.file} ref={fileInput}/>
                {isSelectedPhoto ? button : label}
            </form>
        </>


    )
}


export default Photo
