import {RESET_INITIALIZATION, RESET_IS_LOADING_HOME_PAGE, SET_INITIALIZATION, SET_IS_LOADING_HOME_PAGE} from "../action";

const stateInitialization = {
    initialization: false
}

export const appReducer = (state = stateInitialization, action) => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                initialization: true,
            };
        case RESET_INITIALIZATION:
            return {
                ...state,
                initialization: false,
            };
        case SET_IS_LOADING_HOME_PAGE:
            return {
                ...state,
                isLoadHomePage: true,
            }
        case RESET_IS_LOADING_HOME_PAGE:
            return {
                ...state,
                greenhouses: null,
            }
        default:
            return state;
    }
}

