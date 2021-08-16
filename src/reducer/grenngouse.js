import {
    RESET_ALL_PROFILES_GREENHOUSES,
    RESET_GREENHOUSE_PROFILE, RESET_GREENHOUSE_TARIFF_PLAN,
    SET_ALL_PROFILES_GREENHOUSES,
    SET_GREENHOUSE_PROFILE,
    SET_GREENHOUSE_TARIFF_PLAN
} from "../action";

const stateInitialization = {
    greenhouses: null,
    profile: null,
    tariffPlan: null,
}

export function greenhouseReducer(state = stateInitialization, action) {
    switch (action.type) {
        case SET_ALL_PROFILES_GREENHOUSES:
            return {
                ...state,
                greenhouses: action.greenhouses,
            }
        case RESET_ALL_PROFILES_GREENHOUSES:
            return {
                ...state,
                greenhouses: null,
            }
        case SET_GREENHOUSE_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case RESET_GREENHOUSE_PROFILE:
            return {
                ...state,
                profile: null,
            }
        case SET_GREENHOUSE_TARIFF_PLAN:
            return {
                ...state,
                tariffPlan: action.tariffPlan,
            }
        case RESET_GREENHOUSE_TARIFF_PLAN:
            return {
                ...state,
                tariffPlan: null,
            }
        default:
            return state
    }
}

