import React, { useState, useEffect } from "react"

import "./weather.scss"

import weatherAPI from "../../api/weatherService"

import WeatherByTime from "./weatherByTime/WeatherByTime"
import Spinner from "../spinner/Spinner"
import Conditions from "../conditions/Conditions"
import ErrorMessage from "../errorMessage/ErrorMessage"

const Weather = ({ weatherLocation }) => {

    const [currentWeather, setCurrentWeather] = useState(null)

    const { getWeather, error, loading, setLoading } = weatherAPI()

    useEffect(() => {
        updateWeather(weatherLocation)
    }, [weatherLocation])

    const updateWeather = (location) => {
        getWeather(location)
            .then(setWeatherToState)
    }

    const setWeatherToState = (weather) => {
        setCurrentWeather(weather)
        setLoading(false)
    }

    const content = !loading && !error ? <View currentWeather={currentWeather} /> : null
    const spinner = loading ? <Spinner /> : null
    const errorMessage = error && !loading ? <ErrorMessage /> : null

    return (
        < div className="wrapper">
            {errorMessage}
            {spinner}
            {content}
        </div >
    )
}

const View = ({ currentWeather }) => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const currentLocationTime = currentWeather.location.localtime
    const currentDayIndex = new Date(currentLocationTime).getDay()
    const currentLocationCity = currentWeather.location.name
    const currentLocationCountry = currentWeather.location.country
    const currentLocationDate = new Date(currentLocationTime).getDate()
    const currentLocationMonth = new Date(currentLocationTime).getMonth() + 1
    const currentLocationHour = new Date(currentWeather.location.localtime).getHours()

    function getTotalHoursForecast(i) {
        return currentWeather.forecast.forecastday[i].hour
    }

    let hourlyForecast = []

    switch (currentLocationHour) {

        case 20:
            hourlyForecast.push(
                getTotalHoursForecast(0)[+currentLocationHour + 1],
                getTotalHoursForecast(0)[+currentLocationHour + 2],
                getTotalHoursForecast(0)[+currentLocationHour + 3],
                getTotalHoursForecast(1)[0],
            )
            break;
        case 21:
            hourlyForecast.push(
                getTotalHoursForecast(0)[+currentLocationHour + 1],
                getTotalHoursForecast(0)[+currentLocationHour + 2],
                getTotalHoursForecast(1)[0],
                getTotalHoursForecast(1)[1],
            )
            break;
        case 22:
            hourlyForecast.push(
                getTotalHoursForecast(0)[+currentLocationHour + 1],
                getTotalHoursForecast(1)[0],
                getTotalHoursForecast(1)[1],
                getTotalHoursForecast(1)[2]
            )
            break;
        case 23:
            hourlyForecast.push(
                getTotalHoursForecast(1)[0],
                getTotalHoursForecast(1)[1],
                getTotalHoursForecast(1)[2],
                getTotalHoursForecast(1)[3],

            )
            break;
        default:
            for (let i = 1; i <= 4; i++) {
                hourlyForecast.push(getTotalHoursForecast(0)[+currentLocationHour + i])
            }
    }

    return (
        <>
            <main className="weather">
                <div className="weather-current">
                    <div
                        className="weather-location">{currentLocationCity}, <span>{currentLocationCountry}</span></div>
                    <div className="weather-day">
                        {currentLocationDate}.
                        {`0${currentLocationMonth}`}
                        , {days[currentDayIndex]}
                        , {currentLocationTime.slice(10)}</div>
                    <div className="weather-temperature">{currentWeather.current.temp_c}°C</div>
                </div>
                <div className="weather-future">
                    {
                        hourlyForecast.map((item, i) => {
                            return <WeatherByTime
                                key={i}
                                text={item.condition.text}
                                time={item.time.slice(11)}
                                img={item.condition.icon}
                                temperature={item.temp_c} />
                        })
                    }
                </div>
            </main>
            <Conditions conditions={currentWeather.current} />
        </>
    )
}

export default Weather