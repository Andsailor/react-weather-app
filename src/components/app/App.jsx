import React, { useState } from "react";

import "./app.scss"

import Header from "../header/Header"
import Weather from "../weather/Weather"
import DailyWeather from "../weatherByDay/DailyWeather"

const App = () => {

    const [weatherLocation, setWeatherLocation] = useState("Druzhkovka")

    return (
        <div className="container">
            <Header
                setWeatherLocation={setWeatherLocation} />
            <Weather
                weatherLocation={weatherLocation} />
            <DailyWeather
                weatherLocation={weatherLocation} />

        </div>
    )
}

export default App