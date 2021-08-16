import React from 'react';
import {Login} from "../../components/login";
import {connect} from "react-redux";
import {loginTC} from "../../thunk";
import {compose} from "redux";
import {withoutAuthRedirect} from "../../HOC/withoutAuthRedirect";


const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {}
}

export const LoginPage = compose(
    withoutAuthRedirect,
    connect(mapStateToProps, {loginTC})
)(LoginContainer)
