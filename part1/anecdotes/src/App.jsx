import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    // State

    const [selected, setSelected] = useState(0)
    const [scores, setScores] = useState(Array(anecdotes.length).fill(0))

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const getMaxVoteIndex = () => {
        let index = 0
        scores.forEach((score, i) => {
            if (score > scores[index]) index = i
        })
        return index
    }

    // Handlers

    const handleRandomClick = () => {
        const updatedSelected = getRandomInt(anecdotes.length)
        setSelected(updatedSelected)
    }

    const handleVoteClick = () => {
        const updatedScores = [...scores]
        updatedScores[selected] += 1
        setScores(updatedScores)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <button onClick={handleRandomClick}>next anecdote</button>
            <p>{anecdotes[selected]}</p>
            <p>Votes = {scores[selected]}</p>
            <button onClick={handleVoteClick}>vote</button>

            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[getMaxVoteIndex()]}</p>
        </div>
    )
}

export default App
