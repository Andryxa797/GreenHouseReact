import {connect} from "react-redux";
import * as React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {TariffPlanGreenhousesTC} from "../thunk";

const mapStateToProps = (state) => {
    return {
        tariffPlan: state.greenhouse.tariffPlan,
    }
}

const TariffPlan = (Component) => {
    const TariffPlanComponent = ({tariffPlan, TariffPlanGreenhousesTC, ...props}) => {
        const params = useParams()
        const [isInitialize, setIsInitialize] = useState(false)
        useEffect(() => {
            (async () => {
                await TariffPlanGreenhousesTC(params.id)
            })()
            setIsInitialize(true)
        }, [])
        return isInitialize ? <Component tariffPlan={tariffPlan} {...props}/> : null
    }
    return connect(mapStateToProps, {TariffPlanGreenhousesTC})(TariffPlanComponent)
}
export {TariffPlan}


