import style from "./CardDataView.module.css";
import temperature from "../../../../assert/img/temperatureAir.png";
import chart from "../../../../assert/img/chart.png";
import table from "../../../../assert/img/table.png";
import React from "react";
import {NavLink, withRouter} from "react-router-dom";

let CardDataView = ({title, link, ...props}) => {
    return (
        <div className={style.viewDataCard}>
            <div className={style.flexRow}>
                <div><img className={style.smallIcon} src={temperature} alt=""/></div>
                <div>{title}</div>
            </div>
            <div className="btnNormal"><NavLink to={props.location.pathname + link + '/data'}> Просмотр</NavLink></div>
        </div>
    )
}
CardDataView = withRouter(CardDataView)
export {CardDataView}

// {/*<div className={style.flexRow}>*/}
// {/*    <div><img className={style.flexRow__linkImg} src={chart} alt=""/></div>*/}
// {/*    <div><img className={style.flexRow__linkImg} src={table} alt=""/></div>*/}
// {/*</div>*/}