import React from "react";
import {About} from "./about";
import {Functions} from "./functions";

const Detail = ({profile, tariffPlan}) => {
    return (
        <>
            <About profile={profile} tariffPlan={tariffPlan}/>
            <Functions tariffPlan={tariffPlan}/>
        </>
    )
}

export {Detail}