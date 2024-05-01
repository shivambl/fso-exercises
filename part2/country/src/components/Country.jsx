import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import CapitalWeather from './CapitalWeather'

const Country = ({ country }) => {

    // Constants
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather"
    const api_key = import.meta.env.VITE_API_KEY

    // Country details
    const name = country.name.common
    const capital = country.capital
    const area = country.area
    const languages = Object.values(country.languages)
    const flagUrl = country.flags.png
    const flagAlt = country.flags.alt
    const [capitalLat, capitalLng] = country.capitalInfo.latlng

    // State
    const [weather, setWeather] = useState(null)

    // Effects
    useEffect(() => {
        console.log(`Effect: Getting weather for ${capital} (${capitalLat}, ${capitalLng})`)
        axios
            .get(weatherUrl, {
                params: {
                    lat: capitalLat,
                    lon: capitalLng,
                    appid: api_key,
                    units: 'metric'
                }
            })
            .then(resp => {
                console.log("Weather response:", resp)
                setWeather(resp.data)
            })
    }, [])

    return (
        <>
            <h2>{name}</h2>
            <p>
                Capital: {capital}
                <br />
                Area: {area}
            </p>

            <h3>Languages</h3>
            <ul>
                {languages.map(l =>
                    <li key={l}>
                        {l}
                    </li>
                )}
            </ul>

            <h3>Flag</h3>
            <img src={flagUrl} alt={flagAlt} />

            <h3>Weather in {capital}</h3>
            <p>
                Latitude: {capitalLat}
                <br />
                Longitude: {capitalLng}
            </p>
            <CapitalWeather weather={weather} />

            <h3>All data (raw)</h3>
            <pre>
                {JSON.stringify(country, null, 4)}
            </pre>
        </>
    )
}

export default Country
