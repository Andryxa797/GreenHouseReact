import axios from "axios";
import {routePath} from "../common/route/route";

const token = () => {
    return localStorage.getItem('accessTokenJWT')
}

const instance = (token) => {
    return axios.create({
        baseURL: 'http://127.0.0.1:8000',
        headers: {Authorization: `Bearer ${token}`}
    });
}

const instanceWithoutToken = () => {
    return axios.create({
        baseURL: 'http://172.20.10.2:8000'
    });
}

export const AuthAPI = {
    login: (login, password) => {
        return instance().post('/auth/jwt/create/', {username: login, password: password})
    },
    tokenVerify: () => {
        return instance().post('/auth/jwt/verify/', {'token': token()})
    },
    register: (login, email, firstName, lastName, password) => {
        return instanceWithoutToken().post('/auth/users/', {
            username: login,
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: password,
        })
    }
}

export const ProfileAPI = {
    getUserName: () => {
        return instance(localStorage.getItem('accessTokenJWT')).get('/auth/users/me/')
    },
    getUserProfile: () => {
        return instance(localStorage.getItem('accessTokenJWT')).get('/profile/')
    },
    setUserProfile: (formData) => {
        const data = {
            is_anonymous_account: formData.isAnonymousAccount,
            name_greenhouse: formData.nameGreenhouse,
            address: formData.address,
            number_telephone: formData.numberTelephone,
            city: formData.city,
            country: formData.country,
        }
        return instance(localStorage.getItem('accessTokenJWT')).put('/profile/', data)
    },
    setPhotoProfile: (photo) => {
        let formData = new FormData();
        formData.append("avatar", photo);
        return instance(localStorage.getItem('accessTokenJWT')).put('/profile/', formData, {
            headers: {
                "Content-type": "multipart/form-data",
            }
        })
    },
}


export const GreenhouseAPI = {
    listMyGreenhouse: () => {
        return instance(localStorage.getItem('accessTokenJWT')).get('my-greenhouses/')
    },
    getProfile: (id) => {
        return instance(localStorage.getItem('accessTokenJWT')).get('greenhouse/profile/' + id)
    },
    getTariffPlan: (id) => {
        return instance(localStorage.getItem('accessTokenJWT')).get('greenhouse/tariffPlan/' + id)
    },
}
export const GreenhouseDataAPI = {
    dataApi: (params, id, paginationCurrent, pageSize) => {
        return instance(localStorage.getItem('accessTokenJWT')).get(`greenhouse/${params}/${id}?page=${paginationCurrent}&page_size=${pageSize}`)
    }
}