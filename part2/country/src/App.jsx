import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    // Constants
    const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

    // State
    const [allCountries, setAllCountries] = useState([])

    // Effects
    useEffect(() => {
        axios
            .get(`${baseUrl}/all`)
            .then(resp => {
                console.log("GET all countries response:", resp)
                setAllCountries(resp.data)
            })
    }, [])

    return (
        <div>
            <h1>Country data</h1>

            <ol>
                {allCountries.map((c, i) =>
                    <li key={i}>
                        {c.name.common}
                    </li>
                )}
            </ol>
        </div>
    )
}

export default App
