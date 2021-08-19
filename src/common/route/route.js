export const routePath = Object.freeze({
    HomePage: {
        home: '/'
    },
    Auth: {
        login: '/login',
        register: '/register'
    },
    PersonalAccount: {
        personalAccount: '/lk'
    },
    Detail: {
        detail: '/detail/:id/'
    },
    Table: {
        table: '/detail/:id/:view/data',
    },
    DataParams:{
        temperatureAir: 'temperature-air',
        temperatureSoil: 'temperature-soil',
        humidityAir: 'humidity-air',
        humiditySoil: 'humidity-soil',
        windowStatus: 'window-status',
        pumps: 'pumps',
        heaters: 'heaters',
        additionalLoad: 'additional-load',
    }
});