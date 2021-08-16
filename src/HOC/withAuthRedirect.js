import {connect} from "react-redux";
import * as React from "react";
import {Redirect} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}

export const withAuthRedirect = (Component) => {
    const withAuthRedirectComponent = (props) => {
        if (!props.isLogin) return <Redirect to={'/login'}/>
        if (props.isLogin) return <Component {...props}/>
    }

    return connect(mapStateToProps, {})(withAuthRedirectComponent)
}


