import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Home} from "../../components/home";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {Preloader} from "../../components/common/preloader";
import {resetIsLoadingHomePage, setIsLoadingHomePage} from "../../action";
import {loadAllProfilesGreenhousesTC} from "../../thunk";

const HomeContainer = ({isLoad, greenhousesProfile, resetIsLoadingHomePage, loadAllProfilesGreenhousesTC, setIsLoadingHomePage}) => {
    useEffect(() => {
        if(isLoad) resetIsLoadingHomePage()
        loadAllProfilesGreenhousesTC()
        setIsLoadingHomePage()
    }, [isLoad])

    return isLoad ? <Home greenhousesProfile={greenhousesProfile}/> : <Preloader/>
}

const mapStateToProps = (state) => {
    return {
        isLoad: state.app.isLoadHomePage,
        greenhousesProfile: state.greenhouse.greenhouses,
    }
}

export const HomePage = compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setIsLoadingHomePage,
        resetIsLoadingHomePage,
        loadAllProfilesGreenhousesTC,
    })
)(HomeContainer)
