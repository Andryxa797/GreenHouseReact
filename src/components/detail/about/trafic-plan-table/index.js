import React, {useState} from "react";
import style from "../About.module.css";
import {Modal} from "antd";

const TariffPlanTable = ({tariffPlan}) => {
    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };

    const rowTable = (value, text) => value ? <div>{text} - {value} шт</div> : null
    return tariffPlan ? (
        <tr>
            <td>Тарифный план:</td>
            <td>
                <div className={style.table_btn}>
                    <button className="btnSmall" onClick={showModal}>Подробнее...</button>
                </div>

                <Modal
                    title="Тарифный план"
                    visible={visible}
                    onCancel={handleCancel}
                    okButtonProps={{display: 'none'}}
                    cancelButtonProps={{disabled: true}}
                    footer={[<button className="btnNormal" onClick={handleCancel}>Закрыть</button>]}
                >
                    {rowTable(tariffPlan.number_sensors_temperature_air, 'Д. температуры воздуха')}
                    {rowTable(tariffPlan.number_sensors_temperature_soil, 'Д. температуры почвы')}
                    {rowTable(tariffPlan.number_sensors_humidity_air, 'Д. влажности воздуха')}
                    {rowTable(tariffPlan.number_sensors_humidity_soil, 'Д. влажность почвы')}
                    {rowTable(tariffPlan.number_windows_open, 'Управляемые окна')}
                    {rowTable(tariffPlan.number_pumps, 'Управляемые насосы')}
                    {rowTable(tariffPlan.number_heaters, 'Управляемые обогреватели')}
                    {rowTable(tariffPlan.number_additional_loads, 'Дополнительные нагрузки')}
                </Modal>
            </td>
        </tr>
    ) : null

}
export {TariffPlanTable}