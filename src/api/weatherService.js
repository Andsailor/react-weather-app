import { useState } from "react"

const weatherAPI = () => {

    // API LINK: https://www.weatherapi.com/

    const _baseUrl = "http://api.weatherapi.com/v1/forecast.json?"

    const _apiKey = "b8e63c8f2ba1413b99a93152231504"

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getWeather = async (location, days = 2) => {
        setError(false)
        setLoading(true)
        const response = await fetch(`${_baseUrl}key=${_apiKey}&q=${location}&days=${days}&aqi=no&alerts=yes&lang=uk`)

        if (response.ok) {
            return await response.json();
        }
        else {
            setLoading(false)
            setError(true)
            throw new Error(`Could not fetch url: ${_baseUrl}. Server responded with ${response.status} status`)
        }
    }

    return {
        getWeather,
        loading,
        setLoading,
        error
    }
}

export default weatherAPI;