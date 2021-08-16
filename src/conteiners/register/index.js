import React from "react";
import {registerTC} from "../../thunk";
import {connect} from "react-redux";
import {Register} from "../../components/register";
import {compose} from "redux";
import {withoutAuthRedirect} from "../../HOC/withoutAuthRedirect";

const registerContainer = (props) => {

    return (
        <Register registerTC={props.registerTC}/>
    )
}

const mapStateToProps = () => {
    return {}
}
export const RegisterPage =
    compose(
        withoutAuthRedirect,
        connect(mapStateToProps, {registerTC})
    )(registerContainer)