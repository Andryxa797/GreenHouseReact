import {connect} from "react-redux";
import React, {useEffect} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {Detail} from "../../components/detail";
import {ProfilesGreenhousesTC, TariffPlanGreenhousesTC} from "../../thunk";
import {withRouter} from "react-router-dom";


const DetailContainer = ({ProfilesGreenhousesTC, TariffPlanGreenhousesTC, profile, tariffPlan, ...props}) => {
    const idGreenhouse = props.match.params.id
    useEffect(() => {
        ProfilesGreenhousesTC(idGreenhouse)
        TariffPlanGreenhousesTC(idGreenhouse)
    }, [])

    return <Detail profile={profile} tariffPlan={tariffPlan}/>
}

const mapStateToProps = (state) => {
    return {
        profile: state.greenhouse.profile,
        tariffPlan: state.greenhouse.tariffPlan,
    }
}

export const DetailPage = compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        ProfilesGreenhousesTC,
        TariffPlanGreenhousesTC,
    })
)(DetailContainer)
