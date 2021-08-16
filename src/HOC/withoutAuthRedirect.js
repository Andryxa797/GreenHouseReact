import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import * as React from "react";

export const withoutAuthRedirect = (Component) =>{

    const withoutAuthRedirectComponent = (props) => {
        if (props.isLogin) return <Redirect to={'/'}/>
        if (!props.isLogin) return <Component {...props}/>
    }
    return connect(mapStateToProps, {})(withoutAuthRedirectComponent)

}
const mapStateToProps = (state) =>{
    return{
        isLogin: state.auth.isLogin
    }
}
