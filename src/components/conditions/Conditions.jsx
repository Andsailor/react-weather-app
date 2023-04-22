import React from "react"

import "./conditions.scss"

const Conditions = ({ conditions }) => {

    const { humidity, wind_kph, vis_km, pressure_mb } = conditions

    return (
        <div className="conditions">
            <div className="conditions-info">Conditions  <span>{conditions.condition.text}</span></div>
            <div className="conditions-info">Humidity  <span>{humidity}%</span></div>
            <div className="conditions-info">Wind Speed  <span>{wind_kph} k/h</span></div>
            <div className="conditions-info">Visiblity <span>{vis_km} km</span></div>
            <div className="conditions-info">Pressure <span>{pressure_mb} hPa</span></div>
        </div>
    );
}

export default Conditions