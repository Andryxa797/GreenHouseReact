import {RESET_USER_PHOTO, RESET_USER_PROFILE, RESET_USERNAME, SET_USER_PHOTO, SET_USER_PROFILE, SET_USERNAME} from "../action";

const stateInitialization = {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    avatar: null,
    address: null,
    city: null,
    country: null,
    nameGreenhouse: null,
    numberTelephone: null,
    userIsControlUnit: null,
    isAnonymousAccount: null,
}

export function profileReducer(state = stateInitialization, action) {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName,
                email: action.email,

            }
        case RESET_USERNAME:
            return {
                ...state,
                firstName: null,
                lastName: null,
                userName: null,
                email: null,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                avatar: action.avatar,
                address: action.address,
                city: action.city,
                country: action.country,
                numberTelephone: action.numberTelephone,
                userIsControlUnit: action.userIsControlUnit,
                isAnonymousAccount: action.isAnonymousAccount,
                nameGreenhouse:action.nameGreenhouse,
            }
        case RESET_USER_PROFILE:
            return {
                ...state,
                avatar: null,
                address: null,
                city: null,
                country: null,
                numberTelephone: null,
                userIsControlUnit: null,
                isAnonymousAccount: null,
                nameGreenhouse: null,
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                avatar: action.avatar
            }
        case RESET_USER_PHOTO:
            return {
                ...state,
                avatar: null
            }
        default:
            return state
    }
}



