export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_INITIALIZATION = 'SET_INITIALIZATION'
export const RESET_INITIALIZATION = 'RESET_INITIALIZATION'
export const SET_USERNAME = 'SET_USERNAME'
export const RESET_USERNAME = 'RESET_USERNAME'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const RESET_USER_PROFILE = 'RESET_USER_PROFILE'
export const SET_USER_PHOTO = 'SET_USER_PHOTO'
export const RESET_USER_PHOTO = 'RESET_USER_PHOTO'
export const SET_IS_LOADING_HOME_PAGE = 'SET_IS_LOADING_HOME_PAGE'
export const RESET_IS_LOADING_HOME_PAGE = 'RESET_IS_LOADING_HOME_PAGE'
export const SET_ALL_PROFILES_GREENHOUSES = 'SET_ALL_PROFILES_GREENHOUSES'
export const RESET_ALL_PROFILES_GREENHOUSES = 'RESET_ALL_PROFILES_GREENHOUSES'
export const SET_GREENHOUSE_PROFILE = 'SET_GREENHOUSE_PROFILE'
export const RESET_GREENHOUSE_PROFILE = 'RESET_GREENHOUSE_PROFILE'
export const SET_GREENHOUSE_TARIFF_PLAN = 'SET_GREENHOUSE_TARIFF_PLAN'
export const RESET_GREENHOUSE_TARIFF_PLAN = 'RESET_GREENHOUSE_TARIFF_PLAN'



export const loginAC = (accessTokenJWT, refreshTokenJWT) => {
    localStorage.setItem('accessTokenJWT', accessTokenJWT);
    localStorage.setItem('refreshTokenJWT', refreshTokenJWT);
    return {
        type: LOGIN,
        accessTokenJWT,
        refreshTokenJWT
    }
}
export const logoutAC = () => {
    localStorage.removeItem('accessTokenJWT');
    localStorage.removeItem('refreshTokenJWT');
    return {type: LOGOUT}
}
export const setInitializationAC = () => {
    return {type: SET_INITIALIZATION}
}
export const resetInitializationAC = () => {
    return {type: RESET_INITIALIZATION}
}
export const setUserNameAC = (firstName, lastName, userName, email) => {
    return {type: SET_USERNAME, firstName, lastName, userName, email}
}
export const resetUserNameAC = () => {
    return {type: RESET_USERNAME}
}
export const setUserProfileAC = (avatar, address, city, country, numberTelephone, userIsControlUnit, isAnonymousAccount, nameGreenhouse) => {
    return {type: SET_USER_PROFILE, avatar, address, city, country, numberTelephone, userIsControlUnit, isAnonymousAccount, nameGreenhouse}
}
export const resetUserProfileAC = () => {
    return {type: RESET_USER_PROFILE}
}
export const setUserPhotoAC = (avatar) => {
    return {type: SET_USER_PHOTO, avatar}
}
export const resetUserPhotoAC = () => {
    return {type: RESET_USER_PHOTO}
}
export const setIsLoadingHomePage = (greenhouses) => {
    return {type: SET_IS_LOADING_HOME_PAGE, greenhouses}
}
export const resetIsLoadingHomePage = () => {
    return {type: RESET_IS_LOADING_HOME_PAGE}
}
export const setAllProfilesGreenhouses = (greenhouses) => {
    return {type: SET_ALL_PROFILES_GREENHOUSES, greenhouses}
}
export const resetAllProfilesGreenhouses = () => {
    return {type: RESET_ALL_PROFILES_GREENHOUSES}
}
export const setGreenhouseProfile = (profile) => {
    return {type: SET_GREENHOUSE_PROFILE, profile}
}
export const resetGreenhouseProfile = () => {
    return {type: RESET_GREENHOUSE_PROFILE}
}
export const setGreenhouseTariffPlan = (tariffPlan) => {
    return {type: SET_GREENHOUSE_TARIFF_PLAN, tariffPlan}
}
export const resetGreenhouseTariffPlan = () => {
    return {type: RESET_GREENHOUSE_TARIFF_PLAN}
}
