const CapitalWeather = ({ weather }) => {
    if (!weather) return null

    return (
        <>
            <p>
                Name: {weather.name}
                <br />
                Temperature: {weather.main.temp} Celcius
                <br />
                Range: {weather.main.temp_min} - {weather.main.temp_max} Celcius
                <br />
                Feels like: {weather.main.feels_like} Celcius
            </p>
            <pre>
                {JSON.stringify(weather, null, 4)}
            </pre>
        </>
    )
}

export default CapitalWeather
