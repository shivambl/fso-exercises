import { useState } from 'react'

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
            <button onClick={handleGoodClick}>Good</button>
            <button onClick={handleNeutralClick}>Neutral</button>
            <button onClick={handleBadClick}>Bad</button>

            <h1>Statistics</h1>
            <p>Good = {good}</p>
            <p>Neutral = {neutral}</p>
            <p>Bad = {bad}</p>
            <p>All = {all}</p>
            <p>Avg = {avg}</p>
            <p>Positive % = {posperc} %</p>
        </div>
    )
}

export default App
