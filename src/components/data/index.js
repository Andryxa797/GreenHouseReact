import React from "react";
import {Pagination, Table} from 'antd';
import {columns, TABLE} from "../../common/colums";
import {Chart} from "./chart";
import style from './Data.module.css'


let Data = (props) => {
    const {
        tariffPlan, history, data, loading, setPaginationCurrent,
        paginationPageSize, setPaginationPageSize, paginationTotal
    } = {...props}

    function onChange(pageCurrent, pageSize) {
        setPaginationCurrent(pageCurrent)
        setPaginationPageSize(pageSize)
    }

    return (
        <div className="container">
            <div className={style.card}>
                <Chart data={data} tariffPlan={tariffPlan} history={history}/>
                <Pagination onChange={onChange} pageSize={paginationPageSize} total={paginationTotal}/>
            </div>
            <div className={style.card}>
                <Table columns={columns(history.view, tariffPlan, TABLE)} dataSource={data} onChange={onChange}
                       loading={loading}
                       pagination={false}/>
                <Pagination onChange={onChange} pageSize={paginationPageSize} total={paginationTotal}
                            defaultCurrent={1}/>
            </div>

        </div>
    )
}
export {Data}


// function onChange(pagChange) {
//     setPagination({current: pagChange.current, total: pagChange.total, pageSize: pagChange.pageSize,})
// }
// position={['topRight', 'bottomRight']}
// pagination={{
//     pageSize: pagination.pageSize,
//     total: pagination.total,
//     position: ['topRight', 'bottomRight']
// }}