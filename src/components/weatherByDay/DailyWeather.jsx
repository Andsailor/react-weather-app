import React, { useEffect, useState } from "react"

import weatherAPI from "../../api/weatherService"

import "./dailyWeather.scss"

import SingleDayWeather from "./singleDayWeather/SingleDayWeather"
import Spinner from "../spinner/Spinner"

const DailyWeather = ({ weatherLocation }) => {

    const [dailyForecast, setDailyForecast] = useState(null)

    const { getWeather, loading, setLoading, error } = weatherAPI()

    useEffect(() => {
        updateWeather(weatherLocation, 3)
    }, [weatherLocation])

    const updateWeather = (location, days) => {
        getWeather(location, days)
            .then((result) => setForecastToState(result.forecast.forecastday))
    }

    const setForecastToState = (forecast) => {
        setDailyForecast(forecast)
        setLoading(false)
    }

    const spinner = loading ? <Spinner /> : null
    const content = !loading && !error ?
        (
            dailyForecast.map((item, i) => {

                const day = new Date(item.date).getDay()

                return (
                    <SingleDayWeather
                        date={item.date}
                        text={item.day.condition.text}
                        icon={item.day.condition.icon}
                        key={i}
                        day={day}
                        temperature={item.day.avgtemp_c} />
                )
            })
        )
        : null

    return (
        <div className="table">
            <div className="table-days">
                {content}
            </div>
            {spinner}
        </div>
    )
}

export default DailyWeather