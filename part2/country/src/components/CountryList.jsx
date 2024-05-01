import Country from "./Country"

const CountryList = ({ countries }) => {
    if (!countries) return null
    else if (countries.length > 10) return <p>Too many matches, specify another filter</p>
    else if (countries.length === 1) return <Country country={countries[0]} />

    return (
        <ol>
            {countries.map(c =>
                <li key={c.tld}>
                    {c.name.common}
                </li>
            )}
        </ol>
    )
}

export default CountryList
