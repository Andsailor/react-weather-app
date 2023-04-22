import React from "react";

import "./weatherByTime.scss"

const WeatherByTime = ({ time, img, temperature }) => {
    return (
        <div className="weather-card">
            <div className="weather-card-time">{time}</div>
            <img className="weather-card-image" src={img} alt="weather icon" />
            <div className="weather-card-temperature">{temperature}°C</div>
        </div>
    )
}

export default WeatherByTime