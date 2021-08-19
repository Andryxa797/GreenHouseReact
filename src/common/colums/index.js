import {routePath} from "../route/route";
export const TABLE = 'TABLE'
export const CHART = 'CHART'

const columnsDataCreator = {
    title: 'Дата создания',
    dataIndex: 'creator',
}

const chartDefaultSetting = {
    fill: false,
    lineTension: 0.3,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
}
const fillingDataArrayForTable = (massiveNumberSensors, nameSensors, columns) => {
    let massive = []
    if (massiveNumberSensors && massiveNumberSensors[nameSensors]) {
        for (let i = 0; i < massiveNumberSensors[nameSensors]; i++) {
            for (let key in columns) {
                if (columns[key].id === i) {
                    massive.push({title: columns[key].title, dataIndex: columns[key].dataIndex})
                }
            }
        }
    }
    if (massive.length !== 0) massive.push(columnsDataCreator)
    return massive

}
const fillingDataArrayForChart = (massiveNumberSensors, nameSensors, columns, data) => {
    const massive = {
        labels: [],
        datasets: []
    }
    if (massiveNumberSensors && massiveNumberSensors[nameSensors]) {
        for (let i = 0; i < massiveNumberSensors[nameSensors]; i++) {
            for (let key in columns) {
                if (columns[key].id === i) {
                    massive.datasets[columns[key].dataIndex] = {
                        label: columns[key].title,
                        data: [],
                    }
                }
            }
        }
        data && data.forEach((item, index) => {
            massive.labels.push(item.creator)
            for (let key in massive.datasets) {
                let value = data[index][key]
                massive.datasets[key].data.push(value)
            }
        })
        const newMassive = {labels: massive.labels, datasets: []}
        for (let key in massive.datasets) {
            massive.datasets[key] = {
                ...massive.datasets[key],
                borderColor: columns[key].color,
                backgroundColor: columns[key].color,
                ...chartDefaultSetting
            }
            newMassive.datasets.push(massive.datasets[key])
        }
        return newMassive
    }
    return massive

}

export const columns = (path, numberSensors, tableOrChart, data) => {
    switch (path) {
        case routePath.DataParams.temperatureAir:
            if(tableOrChart === TABLE) return fillingDataArrayForTable(numberSensors, 'number_sensors_temperature_air', columnsTemperatureAir)
            if(tableOrChart === CHART) return fillingDataArrayForChart(numberSensors, 'number_sensors_temperature_air', columnsTemperatureAir, data)
            break
        case routePath.DataParams.temperatureSoil:
            if(tableOrChart === TABLE) return fillingDataArrayForTable(numberSensors, 'number_sensors_temperature_soil', columnsTemperatureSoil)
            if(tableOrChart === CHART) return fillingDataArrayForChart(numberSensors, 'number_sensors_temperature_soil', columnsTemperatureSoil, data)
            break
        case routePath.DataParams.humidityAir:
            if(tableOrChart === TABLE) return fillingDataArrayForTable(numberSensors, 'number_sensors_humidity_air', columnsHumidityAir)
            if(tableOrChart === CHART) return fillingDataArrayForChart(numberSensors, 'number_sensors_humidity_air', columnsHumidityAir, data)
            break
        case routePath.DataParams.humiditySoil:
            if(tableOrChart === TABLE) return fillingDataArrayForTable(numberSensors, 'number_sensors_humidity_soil', columnsHumiditySoil)
            if(tableOrChart === CHART) return fillingDataArrayForChart(numberSensors, 'number_sensors_humidity_soil', columnsHumiditySoil, data)
            break
        case routePath.DataParams.windowStatus:
            if(tableOrChart === TABLE) return fillingDataArrayForTable(numberSensors, 'number_windows_open', columnsWindowStatus)
            if(tableOrChart === CHART) return fillingDataArrayForChart(numberSensors, 'number_windows_open', columnsWindowStatus, data)
            break
        case routePath.DataParams.pumps:
            if(tableOrChart === TABLE) return fillingDataArrayForTable(numberSensors, 'number_pumps', columnsPumps)
            if(tableOrChart === CHART) return fillingDataArrayForChart(numberSensors, 'number_pumps', columnsPumps, data)
            break
        case routePath.DataParams.heaters:
            if(tableOrChart === TABLE) return fillingDataArrayForTable(numberSensors, 'number_heaters', columnsHeaters)
            if(tableOrChart === CHART) return fillingDataArrayForChart(numberSensors, 'number_heaters', columnsHeaters, data)
            break
        case routePath.DataParams.additionalLoad:
            if(tableOrChart === TABLE) return fillingDataArrayForTable(numberSensors, 'number_additional_loads', columnsAdditionalLoad)
            if(tableOrChart === CHART) return fillingDataArrayForChart(numberSensors, 'number_additional_loads', columnsAdditionalLoad, data)
            break
        default:
            return []
    }
}

export const columnsTemperatureAir = {
    first_temperature_sensor_air: {
        id: 0,
        title: '#1',
        dataIndex: 'first_temperature_sensor_air',
        color: '#80ff00',
        data: []
    },
    second_temperature_sensor_air: {
        id: 1,
        title: '#2',
        color: '#ff8000',
        dataIndex: 'second_temperature_sensor_air',
        data: []
    },
    third_temperature_sensor_air: {
        id: 2,
        title: '#3',
        color: '#ffff00',
        dataIndex: 'third_temperature_sensor_air',
        data: []
    },
    fourth_temperature_sensor_air: {
        id: 3,
        title: '#4',
        color: '#ff0000',
        dataIndex: 'fourth_temperature_sensor_air',
        data: []
    },
    fifth_temperature_sensor_air: {
        id: 4,
        title: '#5',
        color: '#00ff00',
        dataIndex: 'fifth_temperature_sensor_air',
        data: []
    },
    sixth_temperature_sensor_air: {
        id: 5,
        title: '#6',
        color: '#0080ff',
        dataIndex: 'sixth_temperature_sensor_air',
        data: []
    },
    seventh_temperature_sensor_air: {
        id: 6,
        title: '#7',
        color: '#00ff80',
        dataIndex: 'seventh_temperature_sensor_air',
        data: []
    },
    eight_temperature_sensor_air: {
        id: 7,
        title: '#8',
        color: '#00ffff',
        dataIndex: 'eight_temperature_sensor_air',
        data: []
    },
    ninth_temperature_sensor_air: {
        id: 8,
        title: '#9',
        color: '#ff0000',
        dataIndex: 'ninth_temperature_sensor_air',
        data: []
    },
    tenth_temperature_sensor_air: {
        id: 9,
        title: '#10',
        color: '#bcf58a',
        dataIndex: 'tenth_temperature_sensor_air',
        data: []
    },
    eleventh_temperature_sensor_air: {
        id: 10,
        title: '#11',
        color: '#0000ff',
        dataIndex: 'eleventh_temperature_sensor_air',
        data: []
    },
    twelfth_temperature_sensor_air: {
        id: 11,
        title: '#12',
        color: '#8000ff',
        dataIndex: 'twelfth_temperature_sensor_air',
        data: []
    },
    thirteenth_temperature_sensor_air: {
        id: 12,
        title: '#13',
        color: '#ff00ff',
        dataIndex: 'thirteenth_temperature_sensor_air',
        data: []
    },
    fourteenth_temperature_sensor_air: {
        id: 13,
        title: '#14',
        color: '#ff0080',
        dataIndex: 'fourteenth_temperature_sensor_air',
        data: []
    },
    fifteenth_temperature_sensor_air: {
        id: 14,
        title: '#15',
        color: '#5f035e',
        dataIndex: 'fifteenth_temperature_sensor_air',
        data: []
    },

}
export const columnsTemperatureSoil = {
    first_temperature_sensor_soil: {
        id: 0,
        title: '#1',
        dataIndex: 'first_temperature_sensor_soil',
        color: '#80ff00',
        data: []
    },
    second_temperature_sensor_soil: {
        id: 1,
        title: '#2',
        color: '#ff8000',
        dataIndex: 'second_temperature_sensor_soil',
        data: []
    },
    third_temperature_sensor_soil: {
        id: 2,
        title: '#3',
        color: '#ffff00',
        dataIndex: 'third_temperature_sensor_soil',
        data: []
    },
    fourth_temperature_sensor_soil: {
        id: 3,
        title: '#4',
        color: '#ff0000',
        dataIndex: 'fourth_temperature_sensor_soil',
        data: []
    },
    fifth_temperature_sensor_soil: {
        id: 4,
        title: '#5',
        color: '#00ff00',
        dataIndex: 'fifth_temperature_sensor_soil',
        data: []
    },
    sixth_temperature_sensor_soil: {
        id: 5,
        title: '#6',
        color: '#0080ff',
        dataIndex: 'sixth_temperature_sensor_soil',
        data: []
    },
    seventh_temperature_sensor_soil: {
        id: 6,
        title: '#7',
        color: '#00ff80',
        dataIndex: 'seventh_temperature_sensor_soil',
        data: []
    },
    eight_temperature_sensor_soil: {
        id: 7,
        title: '#8',
        color: '#00ffff',
        dataIndex: 'eight_temperature_sensor_soil',
        data: []
    },
    ninth_temperature_sensor_soil: {
        id: 8,
        title: '#9',
        color: '#ff0000',
        dataIndex: 'ninth_temperature_sensor_soil',
        data: []
    },
    tenth_temperature_sensor_soil: {
        id: 9,
        title: '#10',
        color: '#bcf58a',
        dataIndex: 'tenth_temperature_sensor_soil',
        data: []
    },
    eleventh_temperature_sensor_soil: {
        id: 10,
        title: '#11',
        color: '#0000ff',
        dataIndex: 'eleventh_temperature_sensor_soil',
        data: []
    },
    twelfth_temperature_sensor_soil: {
        id: 11,
        title: '#12',
        color: '#8000ff',
        dataIndex: 'twelfth_temperature_sensor_soil',
        data: []
    },
    thirteenth_temperature_sensor_soil: {
        id: 12,
        title: '#13',
        color: '#ff00ff',
        dataIndex: 'thirteenth_temperature_sensor_soil',
        data: []
    },
    fourteenth_temperature_sensor_soil: {
        id: 13,
        title: '#14',
        color: '#ff0080',
        dataIndex: 'fourteenth_temperature_sensor_soil',
        data: []
    },
    fifteenth_temperature_sensor_soil: {
        id: 14,
        title: '#15',
        color: '#5f035e',
        dataIndex: 'fifteenth_temperature_sensor_soil',
        data: []
    },

}
export const columnsHumidityAir = {
    first_humidity_sensor_air: {
        id: 0,
        title: '#1',
        dataIndex: 'first_humidity_sensor_air',
        color: '#80ff00',
        data: []
    },
    second_humidity_sensor_air: {
        id: 1,
        title: '#2',
        color: '#ff8000',
        dataIndex: 'second_humidity_sensor_air',
        data: []
    },
    third_humidity_sensor_air: {
        id: 2,
        title: '#3',
        color: '#ffff00',
        dataIndex: 'third_humidity_sensor_air',
        data: []
    },
    fourth_humidity_sensor_air: {
        id: 3,
        title: '#4',
        color: '#ff0000',
        dataIndex: 'fourth_humidity_sensor_air',
        data: []
    },
    fifth_humidity_sensor_air: {
        id: 4,
        title: '#5',
        color: '#00ff00',
        dataIndex: 'fifth_humidity_sensor_air',
        data: []
    },
    sixth_humidity_sensor_air: {
        id: 5,
        title: '#6',
        color: '#0080ff',
        dataIndex: 'sixth_humidity_sensor_air',
        data: []
    },
    seventh_humidity_sensor_air: {
        id: 6,
        title: '#7',
        color: '#00ff80',
        dataIndex: 'seventh_humidity_sensor_air',
        data: []
    },
    eight_humidity_sensor_air: {
        id: 7,
        title: '#8',
        color: '#00ffff',
        dataIndex: 'eight_humidity_sensor_air',
        data: []
    },
    ninth_humidity_sensor_air: {
        id: 8,
        title: '#9',
        color: '#ff0000',
        dataIndex: 'ninth_humidity_sensor_air',
        data: []
    },
    tenth_humidity_sensor_air: {
        id: 9,
        title: '#10',
        color: '#bcf58a',
        dataIndex: 'tenth_humidity_sensor_air',
        data: []
    },
    eleventh_humidity_sensor_air: {
        id: 10,
        title: '#11',
        color: '#0000ff',
        dataIndex: 'eleventh_humidity_sensor_air',
        data: []
    },
    twelfth_humidity_sensor_air: {
        id: 11,
        title: '#12',
        color: '#8000ff',
        dataIndex: 'twelfth_humidity_sensor_air',
        data: []
    },
    thirteenth_humidity_sensor_air: {
        id: 12,
        title: '#13',
        color: '#ff00ff',
        dataIndex: 'thirteenth_humidity_sensor_air',
        data: []
    },
    fourteenth_humidity_sensor_air: {
        id: 13,
        title: '#14',
        color: '#ff0080',
        dataIndex: 'fourteenth_humidity_sensor_air',
        data: []
    },
    fifteenth_humidity_sensor_air: {
        id: 14,
        title: '#15',
        color: '#5f035e',
        dataIndex: 'fifteenth_humidity_sensor_air',
        data: []
    },

}
export const columnsHumiditySoil = {
    first_humidity_sensor_soil: {
        id: 0,
        title: '#1',
        dataIndex: 'first_humidity_sensor_soil',
        color: '#80ff00',
        data: []
    },
    second_humidity_sensor_soil: {
        id: 1,
        title: '#2',
        color: '#ff8000',
        dataIndex: 'second_humidity_sensor_soil',
        data: []
    },
    third_humidity_sensor_soil: {
        id: 2,
        title: '#3',
        color: '#ffff00',
        dataIndex: 'third_humidity_sensor_soil',
        data: []
    },
    fourth_humidity_sensor_soil: {
        id: 3,
        title: '#4',
        color: '#ff0000',
        dataIndex: 'fourth_humidity_sensor_soil',
        data: []
    },
    fifth_humidity_sensor_soil: {
        id: 4,
        title: '#5',
        color: '#00ff00',
        dataIndex: 'fifth_humidity_sensor_soil',
        data: []
    },
    sixth_humidity_sensor_soil: {
        id: 5,
        title: '#6',
        color: '#0080ff',
        dataIndex: 'sixth_humidity_sensor_soil',
        data: []
    },
    seventh_humidity_sensor_soil: {
        id: 6,
        title: '#7',
        color: '#00ff80',
        dataIndex: 'seventh_humidity_sensor_soil',
        data: []
    },
    eight_humidity_sensor_soil: {
        id: 7,
        title: '#8',
        color: '#00ffff',
        dataIndex: 'eight_humidity_sensor_soil',
        data: []
    },
    ninth_humidity_sensor_soil: {
        id: 8,
        title: '#9',
        color: '#ff0000',
        dataIndex: 'ninth_humidity_sensor_soil',
        data: []
    },
    tenth_humidity_sensor_soil: {
        id: 9,
        title: '#10',
        color: '#bcf58a',
        dataIndex: 'tenth_humidity_sensor_soil',
        data: []
    },
    eleventh_humidity_sensor_soil: {
        id: 10,
        title: '#11',
        color: '#0000ff',
        dataIndex: 'eleventh_humidity_sensor_soil',
        data: []
    },
    twelfth_humidity_sensor_soil: {
        id: 11,
        title: '#12',
        color: '#8000ff',
        dataIndex: 'twelfth_humidity_sensor_soil',
        data: []
    },
    thirteenth_humidity_sensor_soil: {
        id: 12,
        title: '#13',
        color: '#ff00ff',
        dataIndex: 'thirteenth_humidity_sensor_soil',
        data: []
    },
    fourteenth_humidity_sensor_soil: {
        id: 13,
        title: '#14',
        color: '#ff0080',
        dataIndex: 'fourteenth_humidity_sensor_soil',
        data: []
    },
    fifteenth_humidity_sensor_soil: {
        id: 14,
        title: '#15',
        color: '#5f035e',
        dataIndex: 'fifteenth_humidity_sensor_soil',
        data: []
    },

}
export const columnsWindowStatus = {
    first_window: {
        id: 0,
        title: '#1',
        dataIndex: 'first_window',
        color: '#80ff00',
        data: []
    },
    second_window: {
        id: 1,
        title: '#2',
        color: '#ff8000',
        dataIndex: 'second_window',
        data: []
    },
    third_window: {
        id: 2,
        title: '#3',
        color: '#ffff00',
        dataIndex: 'third_window',
        data: []
    },
    fourth_window: {
        id: 3,
        title: '#4',
        color: '#ff0000',
        dataIndex: 'fourth_window',
        data: []
    },
    fifth_window: {
        id: 4,
        title: '#5',
        color: '#00ff00',
        dataIndex: 'fifth_window',
        data: []
    },
    sixth_window: {
        id: 5,
        title: '#6',
        color: '#0080ff',
        dataIndex: 'sixth_window',
        data: []
    },

}
export const columnsPumps = {
    first_pump: {
        id: 0,
        title: '#1',
        dataIndex: 'first_pump',
        color: '#80ff00',
        data: []
    },
    second_pump: {
        id: 1,
        title: '#2',
        color: '#ff8000',
        dataIndex: 'second_pump',
        data: []
    },
    third_pump: {
        id: 2,
        title: '#3',
        color: '#ffff00',
        dataIndex: 'third_pump',
        data: []
    },
    fourth_pump: {
        id: 3,
        title: '#4',
        color: '#ff0000',
        dataIndex: 'fourth_pump',
        data: []
    },
    fifth_pump: {
        id: 4,
        title: '#5',
        color: '#00ff00',
        dataIndex: 'fifth_pump',
        data: []
    },
}
export const columnsHeaters = {
    first_heater: {
        id: 0,
        title: '#1',
        dataIndex: 'first_heater',
        color: '#80ff00',
        data: []
    },
    second_heater: {
        id: 1,
        title: '#2',
        color: '#ff8000',
        dataIndex: 'second_heater',
        data: []
    },
    third_heater: {
        id: 2,
        title: '#3',
        color: '#ffff00',
        dataIndex: 'third_heater',
        data: []
    },
    fourth_heater: {
        id: 3,
        title: '#4',
        color: '#ff0000',
        dataIndex: 'fourth_heater',
        data: []
    },
    fifth_heater: {
        id: 4,
        title: '#5',
        color: '#00ff00',
        dataIndex: 'fifth_heater',
        data: []
    },
}
export const columnsAdditionalLoad = {
    first_additional_load: {
        id: 0,
        title: '#1',
        dataIndex: 'first_additional_load',
        color: '#80ff00',
        data: []
    },
    second_additional_load: {
        id: 1,
        title: '#2',
        color: '#ff8000',
        dataIndex: 'second_additional_load',
        data: []
    },
    third_additional_load: {
        id: 2,
        title: '#3',
        color: '#ffff00',
        dataIndex: 'third_additional_load',
        data: []
    },
    fourth_additional_load: {
        id: 3,
        title: '#4',
        color: '#ff0000',
        dataIndex: 'fourth_additional_load',
        data: []
    },
    fifth_additional_load: {
        id: 4,
        title: '#5',
        color: '#00ff00',
        dataIndex: 'fifth_additional_load',
        data: []
    },
}
