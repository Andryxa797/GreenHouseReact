import React from "react";
import {PersonalAccount} from "../../components/personal-account";
import {setPhotoProfileTC, getUserProfileTC, setUserProfileTC} from "../../thunk";
import {connect} from "react-redux";

const PersonalAccountContainer = (props) => {

    return (
        <PersonalAccount getUserProfileTC={props.getUserProfileTC} setPhotoProfileTC={props.setPhotoProfileTC} setUserProfileTC={props.setUserProfileTC} {...props.profile}/>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}
export const PersonalAccountPage = connect(mapStateToProps, {
    getUserProfileTC: getUserProfileTC,
    setPhotoProfileTC,
    setUserProfileTC
})(PersonalAccountContainer)