const Country = ({ country }) => {

    const name = country.name.common
    const capital = country.capital
    const area = country.area
    const languages = Object.values(country.languages)
    const flagUrl = country.flags.png
    const flagAlt = country.flags.alt

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

            <h3>All data (raw)</h3>
            <pre>
                {JSON.stringify(country, null, 4)}
            </pre>
        </>
    )
}

export default Country
