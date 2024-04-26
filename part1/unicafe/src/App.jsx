import { useState } from 'react'

const Button = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>
}

const StatisticLine = ({ label, value }) => {
    return (
        <tr>
            <td>{label}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad, all, avg, posperc }) => {
    if (all === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticLine label="Good" value={good} />
                    <StatisticLine label="Neutral" value={neutral} />
                    <StatisticLine label="Bad" value={bad} />
                    <StatisticLine label="All" value={all} />
                    <StatisticLine label="Avg" value={avg} />
                    <StatisticLine label="Positive" value={posperc + " %"} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    // State
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [avg, setAvg] = useState(0)
    const [posperc, setPosperc] = useState(0)

    // Handlers
    const handleGoodClick = () => {
        const updatedGood = good + 1
        setGood(updatedGood)

        const updatedAll = updatedGood + neutral + bad
        setAll(updatedAll)

        setAvg((updatedGood - bad) / updatedAll)
        setPosperc((updatedGood / updatedAll) * 100)
    }

    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)

        const updatedAll = good + updatedNeutral + bad
        setAll(updatedAll)

        setAvg((good - bad) / updatedAll)
        setPosperc((good / updatedAll) * 100)
    }

    const handleBadClick = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)

        const updatedAll = good + neutral + updatedBad
        setAll(updatedAll)

        setAvg((good - updatedBad) / updatedAll)
        setPosperc((good / updatedAll) * 100)
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick={handleGoodClick} label="Good" />
            <Button onClick={handleNeutralClick} label="Neutral" />
            <Button onClick={handleBadClick} label="Bad" />

            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                all={all}
                avg={avg}
                posperc={posperc}
            />
        </div>
    )
}

export default App
