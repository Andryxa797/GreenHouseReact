import {Header} from "../../components/header";
import React from "react";
import {connect} from "react-redux";
import {logoutAC} from "../../action";

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    )
}

const mapStateToProps = (state) =>{
    return{
        isLogin: state.auth.isLogin,
        firstName: state.profile.firstName
    }
}
export default connect(mapStateToProps, {
    logoutAC
})(HeaderContainer)