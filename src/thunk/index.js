import {AuthAPI, GreenhouseAPI, ProfileAPI} from "../api";
import {
    loginAC,
    logoutAC,
    resetInitializationAC,
    resetUserNameAC,
    resetUserPhotoAC, setAllProfilesGreenhouses, setGreenhouseProfile, setGreenhouseTariffPlan,
    setInitializationAC,
    setUserNameAC,
    setUserPhotoAC,
    setUserProfileAC
} from "../action";

export const initializeAppTC = (isLogin) => async (dispatch) => {
    dispatch(resetInitializationAC())
    let isLoginNow = isLogin
    let accessTokenJWT = localStorage.getItem('accessTokenJWT')
    let refreshTokenJWT = localStorage.getItem('refreshTokenJWT')
    if (accessTokenJWT && refreshTokenJWT) {
        dispatch(loginAC(accessTokenJWT, refreshTokenJWT))
        isLoginNow = true
    }
    if (isLoginNow) {
        let isValidToken
        try {
            isValidToken = await AuthAPI.tokenVerify()
            isValidToken = isValidToken.status === 200
        } catch (e) {
            isValidToken = false
        }
        if (isValidToken) {
            try {
                await dispatch(getUserNameTC())
            } catch (e) {
                console.error(e)
            }
        }
    }
    dispatch(setInitializationAC())
}
export const loginTC = (login, password) => async (dispatch) => {
    try {
        let response = await AuthAPI.login(login, password)

        if (response.status === 200) {
            dispatch(loginAC(response.data.access, response.data.refresh))
            return {status: 'OK'}
        } else {
            dispatch(logoutAC())
            dispatch(resetUserNameAC())
            return {status: 'Error'}
        }
    } catch (e) {
        debugger
        return {status: 'Error', errors: e.response}
    }
}
export const registerTC = (login, email, firstName, lastName, password) => async (dispatch) => {
    try {
        let response = await AuthAPI.register(login, email, firstName, lastName, password)
        if (response.status === 201) {
            dispatch(loginTC(login, password))
            return {status: 'OK'}
        } else {
            return {status: 'Error'}
        }
    } catch (e) {
        console.log(e.response)
        debugger
        return {status: 'Error', errors: e.response}
    }
}
export const getUserNameTC = () => async (dispatch) => {
    try {
        const response = await ProfileAPI.getUserName()
        dispatch(setUserNameAC(response.data.first_name, response.data.last_name, response.data.username, response.data.email))
        return response
    } catch (e) {
        return console.error(e)
    }
}
export const getUserProfileTC = () => async (dispatch) => {
    try {
        const response = await ProfileAPI.getUserProfile()
        dispatch(setUserProfileAC(response.data.avatar, response.data.address,
            response.data.city, response.data.country, response.data.number_telephone,
            response.data.user_is_control_unit, response.data.is_anonymous_account, response.data.name_greenhouse))
        return response
    } catch (e) {
        console.error(e)
        return "Error"
    }
}
export const setUserProfileTC = (formData) => async (dispatch) => {
    try {
        const response = await ProfileAPI.setUserProfile(formData)
        dispatch(setUserProfileAC(response.data.avatar, response.data.address,
            response.data.city, response.data.country, response.data.number_telephone,
            response.data.user_is_control_unit, response.data.is_anonymous_account, response.data.name_greenhouse))
        return response
    } catch (e) {
        console.error(e)
        return "Error"
    }
}
export const setPhotoProfileTC = (photo) => async (dispatch) => {
    try {
        dispatch(resetUserPhotoAC())
        let response = await ProfileAPI.setPhotoProfile(photo)
        if (response.status === 200) {
            response = await ProfileAPI.getUserProfile()
            dispatch(setUserPhotoAC(response.data.avatar))
            return 'Ok'
        } else {
            return 'Error'
        }
    } catch (e) {
        return 'Error'
    }
}
export const loadAllProfilesGreenhousesTC = () => async (dispatch) => {
    try {
        let response = await GreenhouseAPI.listMyGreenhouse()
        if(response.status === 200) {
            dispatch(setAllProfilesGreenhouses(response.data))
            return {status: 'OK'}
        }
        else return {status: 'Error'}

    } catch (e) {
        return {status: 'Error', error: e.response}
    }
}
export const ProfilesGreenhousesTC = (id) => async (dispatch) => {
    try {
        let response = await GreenhouseAPI.getProfile(id)
        if(response.status === 200) {
            dispatch(setGreenhouseProfile(response.data[0]))
            return {status: 'OK'}
        }
        else return {status: 'Error'}

    } catch (e) {
        return {status: 'Error', error: e.response}
    }
}
export const TariffPlanGreenhousesTC = (id) => async (dispatch) => {
    try {
        let response = await GreenhouseAPI.getTariffPlan(id)
        if(response.status === 200) {
            dispatch(setGreenhouseTariffPlan(response.data[0]))
            return {status: 'OK'}
        }
        else return {status: 'Error'}

    } catch (e) {
        return {status: 'Error', error: e.response}
    }
}


