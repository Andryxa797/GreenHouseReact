import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Table} from 'antd';
import {columns} from "./colums";
import {GreenhouseDataAPI} from "../../api";


function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

let TableData = ({...props}) => {
    const history = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            let getData = await GreenhouseDataAPI.temperatureAir(history.id)
            getData = getData.data.map((record) => {
                const obj = {}
                for (const [key, value] of Object.entries(record)) {
                    if (key === 'id' || key === 'owner') obj[key] = value
                    else obj[key] = Number(value).toFixed(1)
                }
                return obj
            })
            setData(getData)
        })()
    }, [])
    return (
        <div className="container">
            <Table columns={columns(history.view)} dataSource={data} onChange={onChange}/>
        </div>
    )
}
export {TableData}