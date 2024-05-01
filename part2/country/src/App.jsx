import { useState, useEffect } from 'react'
import axios from 'axios'

import CountryList from './components/CountryList'

const App = () => {
    // Constants
    const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

    // State
    const [allCountries, setAllCountries] = useState([])
    const [countryFilter, setCountryFilter] = useState('')

    // Effects
    useEffect(() => {
        axios
            .get(`${baseUrl}/all`)
            .then(resp => {
                console.log("GET all countries response:", resp)
                setAllCountries(resp.data)
            })
    }, [])

    // Derived state
    const countriesToShow = countryFilter === ''
        ? allCountries
        : allCountries.filter(c =>
            c.name.common.toLowerCase().includes(countryFilter.toLowerCase())
        )
    console.log("Countries to show:", countriesToShow)

    return (
        <div>
            <h1>Country data</h1>

            <form>
                <label>Find countries:</label>
                &ensp;
                <input
                    value={countryFilter}
                    onChange={event => setCountryFilter(event.target.value)}
                />
            </form>

            <CountryList countries={countriesToShow} />
        </div>
    )
}

export default App
