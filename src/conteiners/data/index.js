import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {Data} from "../../components/data";
import {TariffPlan} from "../../HOC/tariffPlan";
import {useParams} from "react-router-dom";
import {GreenhouseDataAPI} from "../../api";

const dataProcessing = (getData) => {
    return getData.map((record) => {
        const obj = {}
        for (const [key, value] of Object.entries(record)) {
            if (key === 'id' || key === 'owner' || key === 'creator') obj[key] = value
            else obj[key] = Number(value).toFixed(1)
        }
        return obj
    })
}

const DataContainer = ({tariffPlan, ...props}) => {
    const history = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [paginationCurrent, setPaginationCurrent] = useState(1)
    const [paginationPageSize, setPaginationPageSize] = useState(50)
    const [paginationTotal, setPaginationTotal] = useState(0)

    useEffect(() => {
        setLoading(true);
        (async () => {
            let getData = await GreenhouseDataAPI.dataApi(history.view, history.id, paginationCurrent, paginationPageSize)
            setPaginationTotal(getData.data.count)
            setData(dataProcessing(getData.data.results))
        })()
        setLoading(false);
    }, [paginationCurrent, paginationPageSize])

    return <Data tariffPlan={tariffPlan} history={history} data={data} loading={loading}
                 paginationCurrent={paginationCurrent} setPaginationCurrent={setPaginationCurrent}
                 paginationPageSize={paginationPageSize} setPaginationPageSize={setPaginationPageSize}
                 paginationTotal={paginationTotal}/>
}

export const TablePage = compose(
    withAuthRedirect,
    TariffPlan,
)(DataContainer)
