import './App.css';
import React, {useEffect} from "react";
import {Footer} from "./components/footer";
import {Route} from "react-router-dom";
import {HomePage} from "./conteiners/home";
import {LoginPage} from "./conteiners/login";
import Header from "./conteiners/header";
import {connect} from "react-redux";
import {Preloader} from "./components/common/preloader";
import {initializeAppTC} from "./thunk";
import {PersonalAccountPage} from "./conteiners/personal-account";
import {RegisterPage} from "./conteiners/register";
import {DetailPage} from "./conteiners/detail";
import {TablePage} from "./conteiners/data";
import {routePath} from "./common/route/route";

function App({isInitializationApp, initializeAppTC, isLogin}) {

    useEffect(() => initializeAppTC(isLogin), [isLogin])
    const main = (
        <main className="main">
            <Route exact path={routePath.HomePage.home}><HomePage/></Route>
            <Route exact path={routePath.Detail.detail}><DetailPage/></Route>
            <Route path={routePath.Table.table}><TablePage/></Route>
            <Route path={routePath.Auth.register}><RegisterPage/></Route>
            <Route path={routePath.Auth.login}><LoginPage/></Route>
            <Route path={routePath.PersonalAccount.personalAccount}><PersonalAccountPage/></Route>
        </main>)


    return (
        <div className="App">
            <Header/>
            {isInitializationApp ? main : <Preloader/>}
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitializationApp: state.app.initialization,
        isLogin: state.auth.isLogin
    }
}
export default connect(mapStateToProps, {
    initializeAppTC
})(React.memo(App));
