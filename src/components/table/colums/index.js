export const columns = (path) => {
    switch (path) {
        case 'temperature_air':
            return columnsTemperatureAir
        default:
            return []
    }
}

export const columnsTemperatureAir = [
    {
        title: '#1',
        dataIndex: 'first_temperature_sensor_air',
    },
    {
        title: '#2',
         dataIndex: 'second_temperature_sensor_air',
    },
    {
        title: '#3',
         dataIndex: 'third_temperature_sensor_air',
    },
    {
        title: '#4',
         dataIndex: 'fourth_temperature_sensor_air',
    },
    {
        title: '#5',
         dataIndex: 'fifth_temperature_sensor_air',
    },
    {
        title: '#6',
         dataIndex: 'sixth_temperature_sensor_air',
    },
    {
        title: '#7',
         dataIndex: 'seventh_temperature_sensor_air',
    },
    {
        title: '#8',
         dataIndex: 'eight_temperature_sensor_air',
    },
    {
        title: '#9',
         dataIndex: 'ninth_temperature_sensor_air',
    },
    {
        title: '#10',
         dataIndex: 'tenth_temperature_sensor_air',
    },
    {
        title: '#11',
         dataIndex: 'eleventh_temperature_sensor_air',
    },
    {
        title: '#12',
         dataIndex: 'thirteenth_temperature_sensor_air',
    },
    {
        title: '#13',
         dataIndex: 'thirteenth_temperature_sensor_air',
    },
    {
        title: '#14',
         dataIndex: 'fourteenth_temperature_sensor_air',
    },
    {
        title: '#15',
         dataIndex: 'fifteenth_temperature_sensor_air',
    },
];