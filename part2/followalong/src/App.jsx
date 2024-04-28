import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {

    // State
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("")
    const [showAll, setShowAll] = useState(true)

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    // Effects

    useEffect(() => {
        console.log("Using Effect ...")
        axios
            .get("http://localhost:3001/notes")
            .then(response => {
                console.log("Response:", response)
                setNotes(response.data)
            })
    }, [])

    console.log(`Render ${notes.length} notes`)

    // Handlers
    const addNote = (event) => {
        event.preventDefault()
        console.log("Save clicked: ", event.target)

        const noteObject = {
            id: notes.length + 1,
            content: newNote,
            important: Math.random() < 0.5
        }

        setNotes(notes.concat(noteObject))
        setNewNote("")
    }

    const handleNoteChange = (event) => {
        console.log("Note modified: ", event.target.value)
        setNewNote(event.target.value)
    }

    const handleShowAllToggle = () => {
        console.log("Toggle show all")
        setShowAll(!showAll)
    }

    return (
        <div>
            <h1>Notes</h1>
            <button onClick={handleShowAllToggle}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} text={note.content} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App
