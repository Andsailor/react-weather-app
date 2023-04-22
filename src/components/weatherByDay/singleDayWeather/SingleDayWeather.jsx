import React from "react"

import "./singleDayWeather.scss"

const SingleDayWeather = ({ day, temperature, icon, text, date }) => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <div className="single-day">
            <div className="single-day-day">
                {days[day]}
            </div>
            <div className="single-day-date">
                {date}
            </div>
            <img className="single-day-icon" src={icon} alt="single day weather icon" />
            <div className="single-day-text">{`${text}`}</div>
            <div className="single-day-temperature">{`${temperature} °C`}</div>
        </div>
    )
}

export default SingleDayWeather