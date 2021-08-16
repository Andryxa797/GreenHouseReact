import {LOGIN, LOGOUT} from "../action";

const stateInitialization = {
    isLogin: false,
    accessTokenJWT: null,
    refreshTokenJWT: null,
}

export function authReducer(state = stateInitialization, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                accessTokenJWT: action.accessTokenJWT,
                refreshTokenJWT: action.refreshTokenJWT,
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                accessTokenJWT: null,
                refreshTokenJWT: null,
            }
        default:
            return state
    }
}

