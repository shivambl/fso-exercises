import { useState, useEffect } from 'react'

import Note from './components/Note'
import noteService from './services/notes'

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
        noteService
            .getAll()
            .then(initialNotes => {
                console.log("Initial notes:", initialNotes)
                setNotes(initialNotes)
            })
    }, [])

    console.log(`Render ${notes.length} notes`)

    // Handlers
    const addNote = (event) => {
        event.preventDefault()
        console.log("Save clicked: ", event.target)

        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5
        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                console.log("Created note:", returnedNote)
                setNotes(notes.concat(returnedNote))
                setNewNote("")
            })
    }

    const handleNoteChange = (event) => {
        console.log("Note modified: ", event.target.value)
        setNewNote(event.target.value)
    }

    const handleShowAllToggle = () => {
        console.log("Toggle show all")
        setShowAll(!showAll)
    }

    const toggleImportanceOf = (id) => {
        console.log("Toggle importance of note with ID:", id)
        const note = notes.find(n => n.id === id)
        const updatedNote = {
            ...note,
            important: !note.important
        }

        noteService
            .update(id, updatedNote)
            .then(returnedNote => {
                console.log("Modified note:", returnedNote)
                setNotes(notes.map(n => n.id === id ? returnedNote : n))
            })
            .catch(error => {
                console.log("Note modification error:", error)
                alert(`Note ${note.content} was already deleted from the server.`)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    return (
        <div>
            <h1>Notes</h1>
            <button onClick={handleShowAllToggle}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
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
